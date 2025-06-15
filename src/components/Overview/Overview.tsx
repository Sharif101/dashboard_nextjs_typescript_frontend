import React from "react";
import Card from "../Resources/Card/Card";
import { orderStatus, todaySales } from "@/utils/static";

export default function Overview() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, John Doe!
        </h1>
        <p className="text-sm text-gray-600">
          You've made{" "}
          <span className="font-semibold text-gray-900">$2,450</span> today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {todaySales.map((card, id) => (
          <Card key={id}>
            <p className="text-sm text-gray-600">{card.title}</p>
            <p className="text-xl font-semibold text-gray-900">{card.amount}</p>
            <p className="text-sm text-green-600 mt-1">{card.change}</p>
          </Card>
        ))}
      </div>

      <div className="bg-white border rounded-md p-4 shadow-sm">
        <h2 className="text-base font-semibold text-gray-900 mb-4">
          Orders Status
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {orderStatus.map((status, id) => (
            <Card key={id}>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className={`w-2 h-2 rounded-full ${status.color}`}></span>
                {status.label}
              </div>
              <p className="text-xl font-semibold text-gray-900 mt-1">
                {status.value}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
