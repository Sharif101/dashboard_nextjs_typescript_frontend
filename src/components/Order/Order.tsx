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
import { OrderType } from "@/utils/data/orders/type";
import Link from "next/link";

export default function Order() {
  const [tabs, setTabs] = useState("All");
  const [viewModal, setViewModal] = useState(false);
  const [singleOrderDetails, setSingleOrderDetails] =
    useState<OrderType | null>(null);

  const handleShip = () => {
    setViewModal(false);
  };

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
                  <Button
                    variant="outline"
                    onClick={() => {
                      setViewModal(true);
                      setSingleOrderDetails(order);
                    }}
                  >
                    View
                  </Button>
                  <Link href="/dashboard/orders/orderdetail">
                    <Button variant="primary">Shipped</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* -----------Modal------------ */}

      <Modal
        open={viewModal}
        onOpenChange={setViewModal}
        title={`Order #${singleOrderDetails?.id}`}
        des={`Order Placed on ${singleOrderDetails?.date}`}
        contentClassName="w-[450px] max-w-full"
      >
        {singleOrderDetails && (
          <div>
            <div className="flex items-center justify-between">
              <p className="font-[14px] text-[#7D8184]">Status</p>
              <span
                className={cn(
                  "font-medium",
                  singleOrderDetails.status === "Pending" && "text-yellow-500",
                  singleOrderDetails.status === "Shipped" && "text-blue-500",
                  singleOrderDetails.status === "Cancelled" && "text-red-500"
                )}
              >
                {singleOrderDetails.status}
              </span>
            </div>
            <hr className="mt-3 mb-2" />
            <div className="flex items-center justify-between mt-2">
              <p className="text-[14px] text-[#7D8184]">Product:</p>{" "}
              <span>{singleOrderDetails?.product_name}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[14px] text-[#7D8184]">Amount:</p>{" "}
              <span>{singleOrderDetails?.amount}</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[14px] text-[#7D8184]">Customer:</p>{" "}
              <span>{singleOrderDetails?.buyer}</span>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2 mt-5 w-full">
          <div className="flex-1">
            <Button
              variant="outline"
              onClick={() => setViewModal(false)}
              className="w-full"
            >
              Cancel
            </Button>
          </div>
          <Link href="/dashboard/orders/orderdetail" className="flex-1">
            <Button variant="primary" onClick={handleShip} className="w-full">
              Ship Order
            </Button>
          </Link>
        </div>
      </Modal>
    </div>
  );
}
