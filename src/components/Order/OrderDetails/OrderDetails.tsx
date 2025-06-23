"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaArrowLeft, FaPhoneAlt, FaPrint, FaRegCircle } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

export default function OrderDetails() {
  return (
    <div className="max-w-8xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 mb-2">
          <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
            <FaArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-semibold text-gray-900">
            Order Details
          </h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FaPrint className="mr-2 h-4 w-4" /> Print Invoice
          </Button>
          <Button variant="primary">
            <FaPhoneAlt className="mr-2 h-4 w-4" /> Contact Buyer
          </Button>
        </div>
      </div>

      <div className="bg-white shadow-sm border border-gray-200 w-full p-6 rounded">
        {/* Product Card */}
        <Card className="w-[70%]">
          <CardContent className="p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded" />
              <div>
                <h2 className="font-medium text-base">
                  Over The Head Wireless Headphone
                </h2>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md mt-1 inline-block">
                  Pending
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm w-full sm:w-auto">
              <div>
                <p className="text-muted-foreground">Order ID</p>
                <p className="font-medium">Ord-001</p>
              </div>
              <div>
                <p className="text-muted-foreground">Date</p>
                <p className="font-medium">May 15, 2025</p>
              </div>
              <div>
                <p className="text-muted-foreground">Quantity</p>
                <p className="font-medium">1</p>
              </div>
              <div>
                <p className="text-muted-foreground">Condition</p>
                <p className="font-medium">New</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detail Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-6">
          {/* Timeline */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-medium">Timeline</h3>
              {[
                { label: "Order Placed", date: "May 15, 2025", active: true },
                {
                  label: "Payment Confirmed",
                  date: "May 15, 2025",
                  active: true,
                },
                {
                  label: "Processed",
                  date: "Waiting for processing",
                  active: false,
                },
                { label: "Shipped", date: "Not shipped yet", active: false },
                {
                  label: "Delivered",
                  date: "Waiting for delivery",
                  active: false,
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  {item.active ? (
                    <BsCheck2Circle className="text-blue-600 w-4 h-4 mt-1" />
                  ) : (
                    <FaRegCircle className="text-gray-400 w-4 h-4 mt-1" />
                  )}
                  <div>
                    <p className="text-sm font-medium">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Buyer Info */}
          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-medium">Buyer Information</h3>
              <div>
                <p className="text-muted-foreground text-sm">Buyer</p>
                <p className="font-medium text-sm">Mike Turner</p>
                <p className="text-sm text-muted-foreground">
                  example@email.com
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">
                  Shipping Address
                </p>
                <p className="text-sm font-medium">
                  62 Elm Tree Ave, Coventry, West Midlands, UK
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Payment Method</p>
                <p className="text-sm font-medium">Credit Card</p>
                <p className="text-sm text-muted-foreground">
                  **** **** **** 4242
                </p>
                <span className="text-green-600 text-xs font-medium">Paid</span>
              </div>
            </CardContent>
          </Card>

          {/* Payment Info */}
          <Card>
            <CardContent className="p-4 space-y-3">
              <h3 className="font-medium">Payment Info</h3>
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>$99.99</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>$00.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>$00.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Discount</span>
                <span>$00.00</span>
              </div>
              {/* <Separator /> */}
              <hr />
              <div className="flex justify-between text-base font-semibold">
                <span>Total</span>
                <span>$99.99</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-start">
          <Button variant="cancel" className="sm:w-40 w-full">
            Cancel Order
          </Button>
          <Button variant="primary" className="sm:w-40 w-full">
            Ship Order
          </Button>
        </div>
      </div>
    </div>
  );
}
