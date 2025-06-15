"use client";

import { categories, stockStatus } from "@/utils/static";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";

export default function Tab() {
  return (
    <div className="my-3">
      <div className="flex items-center gap-2">
        <div className="flex-1 border rounded-md overflow-hidden bg-white">
          <div className="flex items-center p-3">
            <FaSearch className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by product, brand, or keyword"
              className="w-full text-sm bg-transparent placeholder:text-gray-400 outline-none border-none focus:outline-none focus:border-none focus:ring-0"
            />
          </div>
        </div>

        <div className="min-w-[180px] border border-gray-300 rounded-md bg-white">
          <Select
            options={categories}
            placeholder="Categories"
            classNamePrefix="react-select"
            menuPortalTarget={
              typeof window !== "undefined" ? document.body : null
            }
          />
        </div>

        <div className="min-w-[180px] border border-gray-300 rounded-md bg-white">
          <Select
            options={stockStatus}
            placeholder="Stock Status"
            classNamePrefix="react-select"
            menuPortalTarget={
              typeof window !== "undefined" ? document.body : null
            }
          />
        </div>
      </div>
    </div>
  );
}
