export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
  details?: {
    dimensions: string;
    materials: string[];
    care: string[];
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ConsultationSlot {
  id: number;
  date: string;
  time: string;
  available: boolean;
}