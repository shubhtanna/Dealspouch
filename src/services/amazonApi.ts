import CryptoJS from 'crypto-js';
import { AMAZON_CONFIG } from '../config/amazon';
import { AmazonProduct, AmazonSearchResponse } from '../types/amazon';

class AmazonAffiliateAPI {
  private accessKey: string;
  private secretKey: string;
  private associateTag: string;

  constructor() {
    this.accessKey = AMAZON_CONFIG.ACCESS_KEY;
    this.secretKey = AMAZON_CONFIG.SECRET_KEY;
    this.associateTag = AMAZON_CONFIG.ASSOCIATE_TAG;
  }

  // Generate AWS Signature Version 4
  private generateSignature(
    method: string,
    url: string,
    headers: Record<string, string>,
    payload: string,
    timestamp: string
  ): string {
    const date = timestamp.split('T')[0];
    
    // Create canonical request
    const canonicalUri = AMAZON_CONFIG.URI;
    const canonicalQuerystring = '';
    const canonicalHeaders = Object.keys(headers)
      .sort()
      .map(key => `${key.toLowerCase()}:${headers[key]}`)
      .join('\n') + '\n';
    const signedHeaders = Object.keys(headers)
      .map(key => key.toLowerCase())
      .sort()
      .join(';');
    
    const payloadHash = CryptoJS.SHA256(payload).toString();
    
    const canonicalRequest = [
      method,
      canonicalUri,
      canonicalQuerystring,
      canonicalHeaders,
      signedHeaders,
      payloadHash
    ].join('\n');

    // Create string to sign
    const algorithm = 'AWS4-HMAC-SHA256';
    const credentialScope = `${date}/${AMAZON_CONFIG.REGION}/${AMAZON_CONFIG.SERVICE}/aws4_request`;
    const stringToSign = [
      algorithm,
      timestamp,
      credentialScope,
      CryptoJS.SHA256(canonicalRequest).toString()
    ].join('\n');

    // Calculate signature
    const dateKey = CryptoJS.HmacSHA256(date, 'AWS4' + this.secretKey);
    const dateRegionKey = CryptoJS.HmacSHA256(AMAZON_CONFIG.REGION, dateKey);
    const dateRegionServiceKey = CryptoJS.HmacSHA256(AMAZON_CONFIG.SERVICE, dateRegionKey);
    const signingKey = CryptoJS.HmacSHA256('aws4_request', dateRegionServiceKey);
    
    return CryptoJS.HmacSHA256(stringToSign, signingKey).toString();
  }

  // Search products by keyword
  async searchProducts(
    keywords: string,
    itemCount: number = 10,
    searchIndex: string = 'All'
  ): Promise<AmazonProduct[]> {
    try {
      const timestamp = new Date().toISOString().replace(/\.\d{3}Z/, 'Z');
      
      const payload = JSON.stringify({
        Keywords: keywords,
        Resources: [
          'Images.Primary.Large',
          'Images.Primary.Medium',
          'ItemInfo.Title',
          'ItemInfo.Features',
          'ItemInfo.Classifications',
          'Offers.Listings.Price',
          'Offers.Listings.SavingBasis',
          'Offers.Listings.Availability.Message',
          'CustomerReviews.Count',
          'CustomerReviews.StarRating'
        ],
        SearchIndex: searchIndex,
        ItemCount: itemCount,
        PartnerTag: this.associateTag,
        PartnerType: 'Associates',
        Marketplace: AMAZON_CONFIG.DEFAULT_MARKETPLACE,
        LanguagesOfPreference: [AMAZON_CONFIG.DEFAULT_LANGUAGE]
      });

      const headers = {
        'Authorization': '', // Will be set after signature generation
        'Content-Encoding': 'amz-1.0',
        'Content-Type': 'application/json; charset=utf-8',
        'Host': AMAZON_CONFIG.HOST,
        'X-Amz-Date': timestamp,
        'X-Amz-Target': 'com.amazon.paapi5.v1.ProductAdvertisingAPIv1.SearchItems'
      };

      const signature = this.generateSignature(
        'POST',
        `https://${AMAZON_CONFIG.HOST}${AMAZON_CONFIG.URI}`,
        headers,
        payload,
        timestamp
      );

      console.log("amazon.....",signature);

      const date = timestamp.split('T')[0];
      const credentialScope = `${date}/${AMAZON_CONFIG.REGION}/${AMAZON_CONFIG.SERVICE}/aws4_request`;
      
      headers['Authorization'] = `AWS4-HMAC-SHA256 Credential=${this.accessKey}/${credentialScope}, SignedHeaders=${Object.keys(headers).map(k => k.toLowerCase()).sort().join(';')}, Signature=${signature}`;

      const response = await fetch(`https://${AMAZON_CONFIG.HOST}${AMAZON_CONFIG.URI}`, {
        method: 'POST',
        headers,
        body: payload
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Amazon API Error: ${response.status} - ${errorText}`);
      }

      const data: AmazonSearchResponse = await response.json();
      return data.SearchResult?.Items || [];
    } catch (error) {
      console.error('Error fetching Amazon products:', error);
      throw error;
    }
  }

  // Get product details by ASIN
  async getProductDetails(asins: string[]): Promise<AmazonProduct[]> {
    try {
      const timestamp = new Date().toISOString().replace(/\.\d{3}Z/, 'Z');
      
      const payload = JSON.stringify({
        ItemIds: asins,
        Resources: [
          'Images.Primary.Large',
          'Images.Primary.Medium',
          'ItemInfo.Title',
          'ItemInfo.Features',
          'ItemInfo.Classifications',
          'Offers.Listings.Price',
          'Offers.Listings.SavingBasis',
          'Offers.Listings.Availability.Message',
          'CustomerReviews.Count',
          'CustomerReviews.StarRating'
        ],
        PartnerTag: this.associateTag,
        PartnerType: 'Associates',
        Marketplace: AMAZON_CONFIG.DEFAULT_MARKETPLACE,
        LanguagesOfPreference: [AMAZON_CONFIG.DEFAULT_LANGUAGE]
      });

      const headers = {
        'Authorization': '', // Will be set after signature generation
        'Content-Encoding': 'amz-1.0',
        'Content-Type': 'application/json; charset=utf-8',
        'Host': AMAZON_CONFIG.HOST,
        'X-Amz-Date': timestamp,
        'X-Amz-Target': 'com.amazon.paapi5.v1.ProductAdvertisingAPIv1.GetItems'
      };

      const signature = this.generateSignature(
        'POST',
        `https://${AMAZON_CONFIG.HOST}/paapi5/getitems`,
        headers,
        payload,
        timestamp
      );

      const date = timestamp.split('T')[0];
      const credentialScope = `${date}/${AMAZON_CONFIG.REGION}/${AMAZON_CONFIG.SERVICE}/aws4_request`;
      
      headers['Authorization'] = `AWS4-HMAC-SHA256 Credential=${this.accessKey}/${credentialScope}, SignedHeaders=${Object.keys(headers).map(k => k.toLowerCase()).sort().join(';')}, Signature=${signature}`;

      const response = await fetch(`https://${AMAZON_CONFIG.HOST}/paapi5/getitems`, {
        method: 'POST',
        headers,
        body: payload
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Amazon API Error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      return data.ItemsResult?.Items || [];
    } catch (error) {
      console.error('Error fetching Amazon product details:', error);
      throw error;
    }
  }
}

export const amazonApi = new AmazonAffiliateAPI();