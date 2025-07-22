export interface AmazonProduct {
  ASIN: string;
  DetailPageURL: string;
  Images: {
    Primary: {
      Large: {
        URL: string;
        Height: number;
        Width: number;
      };
      Medium: {
        URL: string;
        Height: number;
        Width: number;
      };
    };
  };
  ItemInfo: {
    Title: {
      DisplayValue: string;
    };
    Features?: {
      DisplayValues: string[];
    };
    Classifications?: {
      Binding: {
        DisplayValue: string;
      };
      ProductGroup: {
        DisplayValue: string;
      };
    };
  };
  Offers?: {
    Listings: Array<{
      Price: {
        Amount: number;
        Currency: string;
        DisplayAmount: string;
      };
      SavingBasis?: {
        Amount: number;
        Currency: string;
        DisplayAmount: string;
      };
      Availability: {
        Message: string;
        Type: string;
      };
    }>;
  };
  CustomerReviews?: {
    Count: number;
    StarRating: {
      Value: number;
    };
  };
}

export interface AmazonSearchResponse {
  SearchResult: {
    Items: AmazonProduct[];
    TotalResultCount: number;
  };
}