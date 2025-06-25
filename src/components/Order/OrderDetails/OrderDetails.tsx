"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaArrowLeft, FaPhoneAlt, FaPrint, FaRegCircle } from "react-icons/fa";
import { BsCheck2Circle, BsExclamationTriangle } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineLocalShipping } from "react-icons/md";
import { OrderTimeline } from "@/utils/static";
import Modal from "@/components/Resources/Modal/Modal";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function OrderDetails() {
  const [viewModal, setViewModal] = useState(false);

  console.log(viewModal);

  return (
    <div className="max-w-8xl mx-auto p-6 space-y-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-6">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-medium">Timeline</h3>
              {OrderTimeline.map((item, index) => (
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
              <hr />
              <div className="flex justify-between text-base font-semibold">
                <span>Total</span>
                <span>$99.99</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-start">
          <Button
            variant="cancel"
            className="sm:w-40 w-full"
            onClick={() => setViewModal(true)}
          >
            <RxCross2 className="mr-2 h-4 w-4" />
            Cancel Order
          </Button>
          <Button variant="primary" className="sm:w-40 w-full">
            <MdOutlineLocalShipping className="mr-2 h-4 w-4" /> Ship Order
          </Button>
        </div>
      </div>

      <Modal
        open={viewModal}
        onOpenChange={setViewModal}
        title={``}
        des={``}
        contentClassName="w-[450px] max-w-full"
      >
        <div>
          <div className="flex flex-col items-center">
            <div className="bg-[#FCEEF1] p-3 rounded-[50%]">
              <BsExclamationTriangle className="text-[18px] text-[#DB4444]" />
            </div>
            <p className="text-[#000000] text-[16px] font-bold py-2">
              Cancel Order ?
            </p>
            <p className="text-[#7D8184] text-[13px] text-center">
              Are you sure you want to cancel this order? The customer will be
              notified and the order will be marked as cancelled.
            </p>
          </div>

          <div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="reason">
                Reason for cancellation <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="reason"
                placeholder="Enter reason for cancellation"
                className="resize-none"
              />
            </div>
          </div>

          <div className="border border-[#D1D5DB] rounded-[7px] my-4 p-3">
            <div className="flex items-center justify-between mt-1">
              <p className="text-[14px] text-[#7D8184]">Order ID:</p>
              <span>#1243</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <p className="text-[14px] text-[#7D8184]">Product:</p>
              <span>Wireless Earbuds X200</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <p className="text-[14px] text-[#7D8184]">Customer:</p>
              <span>Jane Doe</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-5 w-full">
            <div className="flex-1">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setViewModal(false)}
              >
                Keep Order
              </Button>
            </div>
            <div className="flex-1">
              <Button variant="primary" className="w-full">
                Cancel Order
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
