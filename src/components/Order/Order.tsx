"use client";

import React, { useState } from "react";
import Tab from "./Tab/Tab";

export default function Order() {
  const [tabs, setTabs] = useState("All");
  return (
    <div>
      <h2 className="text-[25px] font-semibold text-gray-800">Orders</h2>
      <Tab setTabs={setTabs} tabs={tabs} />
    </div>
  );
}
