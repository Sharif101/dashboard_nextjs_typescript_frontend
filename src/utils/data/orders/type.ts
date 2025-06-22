export type OrderType = {
  id: string;
  date: string;
  buyer: string;
  amount: string;
  status: string;
  product_name: string;
};

export type ProductType = {
  product_title: string;
  description: string;
  brand: string;
  model: string;
  storages: string;
  ram: string;
  color: string;
  condition: string;
  features: string[];
  price: number;
  sale_price: number;
  quantity: number;
  sku: string;
  tags: string[];
  seo_title: string;
  seo_description: string;
};
