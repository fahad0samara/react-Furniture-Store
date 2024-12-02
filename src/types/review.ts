export interface Review {
  id: number;
  productId: number;
  userId: string;
  userName: string;
  userImage?: string;
  rating: number;
  title: string;
  content: string;
  images?: string[];
  createdAt: string;
  helpful: number;
  verified: boolean;
}

export interface ReviewStats {
  averageRating: number;
  totalReviews: number;
  distribution: {
    [key: number]: number;
  };
}