"use client";

import React from "react";
import { FaSearch } from "react-icons/fa";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TabsInfoProps = {
  tabs: string;
  setTabs: (val: string) => void;
};

export default function Tab(props: TabsInfoProps) {
  const { tabs, setTabs } = props;

  return (
    <div className="my-3">
      <div className="">
        <div className="flex-1 border rounded-md overflow-hidden bg-white">
          <div className="flex items-center p-3">
            <FaSearch className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by order id and customer name"
              className="w-full text-sm bg-transparent placeholder:text-gray-400 outline-none border-none focus:outline-none focus:border-none focus:ring-0"
            />
          </div>
        </div>
        <div>
          <Tabs defaultValue={tabs} className="w-full mt-4">
            <TabsList className="w-full justify-between">
              <TabsTrigger value="All" onClick={() => setTabs("All")}>
                All
              </TabsTrigger>
              <TabsTrigger value="Pending" onClick={() => setTabs("Pending")}>
                Pending
              </TabsTrigger>
              <TabsTrigger value="Shipped" onClick={() => setTabs("Shipped")}>
                Shipped
              </TabsTrigger>
              <TabsTrigger
                value="Cancelled"
                onClick={() => setTabs("Cancelled")}
              >
                Cancelled
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
