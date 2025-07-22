export const AMAZON_CONFIG = {
  // ⚠️ IMPORTANT: Replace these with your actual Amazon API credentials
  ACCESS_KEY: import.meta.env.VITE_AMAZON_ACCESS_KEY || 'YOUR_AMAZON_ACCESS_KEY_HERE',
  SECRET_KEY: import.meta.env.VITE_AMAZON_SECRET_KEY || 'YOUR_AMAZON_SECRET_KEY_HERE',
  ASSOCIATE_TAG: import.meta.env.VITE_AMAZON_ASSOCIATE_TAG || 'YOUR_ASSOCIATE_TAG_HERE',
  
  // Amazon API Configuration
  REGION: 'us-east-1', // Change to your preferred region
  HOST: 'webservices.amazon.com',
  URI: '/paapi5/searchitems',
  SERVICE: 'ProductAdvertisingAPI',
  
  // Default search parameters
  DEFAULT_MARKETPLACE: 'www.amazon.com', // Change based on your region
  DEFAULT_LANGUAGE: 'en_US',
  
  // Available marketplaces - choose based on your location
  MARKETPLACES: {
    US: 'www.amazon.com',
    UK: 'www.amazon.co.uk',
    DE: 'www.amazon.de',
    FR: 'www.amazon.fr',
    JP: 'www.amazon.co.jp',
    CA: 'www.amazon.ca',
    IN: 'www.amazon.in',
    IT: 'www.amazon.it',
    ES: 'www.amazon.es'
  }
};