"use client";

import React, { useState } from "react";
import Tab from "./Tab/Tab";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import Modal from "../Resources/Modal/Modal";
import { orders } from "@/utils/data/orders/order";
import { cn } from "@/lib/utils";

type OrderType = {
  id: string;
  date: string;
  buyer: string;
  amount: string;
  status: string;
};

export default function Order() {
  const [tabs, setTabs] = useState("All");
  const [viewModal, setViewModal] = useState(false);

  return (
    <div>
      <h2 className="text-[25px] font-semibold text-gray-800">Orders</h2>
      <Tab setTabs={setTabs} tabs={tabs} />

      <div className="bg-white p-6 rounded-md shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Buyer</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order: OrderType, index) => (
              <TableRow key={index}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.buyer}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell
                  className={cn(
                    "font-medium",
                    order.status === "Pending" && "text-yellow-600",
                    order.status === "Shipped" && "text-blue-600",
                    order.status === "Cancelled" && "text-red-600"
                  )}
                >
                  {order.status}
                </TableCell>
                <TableCell className="text-blue-500 cursor-pointer space-x-2">
                  <Button variant="outline" onClick={() => setViewModal(true)}>
                    View
                  </Button>
                  <Button variant="primary">Shipped</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Modal open={viewModal} onOpenChange={setViewModal} />
    </div>
  );
}
