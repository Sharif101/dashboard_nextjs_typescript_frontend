export type OrderType = {
  id: string;
  date: string;
  buyer: string;
  buyer_name: string;
  buyer_email: string;
  buyer_phone: string;
  order_status: string;
  total_payable_amount: string;
  product_name: string;
  payment_status: string;
  payment_method: string;
  shipping_address: string;
  subtotal: string;
  discount: string;
  tax: string;
  delivery_crg: string;
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
