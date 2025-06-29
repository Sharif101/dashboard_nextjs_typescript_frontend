import OrderDetails from "@/components/Order/OrderDetails/OrderDetails";
import { orders } from "@/utils/data/orders/order";
import { OrderType } from "@/utils/data/orders/type";
import React from "react";

type PageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return orders.map((order) => ({
    slug: order.id,
  }));
}

export default function OrderDetailPage({ params }: PageProps) {
  const order: OrderType | undefined = orders.find((o) => o.id === params.slug);

  if (!order) return <div className="p-6 text-red-500">Order not found</div>;

  return (
    <div>
      <OrderDetails order={order} />
    </div>
  );
}
