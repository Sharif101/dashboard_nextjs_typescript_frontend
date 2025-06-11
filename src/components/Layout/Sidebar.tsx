"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { svgs } from "@/utils/findSvgs/findSvgs";

export function Sidebar() {
  const pathname = usePathname();

  const sidebarItems = [
    {
      id: 1,
      path: "/dashboard/overview",
      icon: svgs.dashboard,
      text: "Overview",
    },
    {
      id: 2,
      path: "/dashboard/products",
      icon: svgs.products,
      text: "Products",
    },
    {
      id: 3,
      path: "/dashboard/orders",
      icon: svgs.orders,
      text: "Orders",
    },
    {
      id: 4,
      path: "/dashboard/settings",
      icon: svgs.settings,
      text: "Settings",
    },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r shadow-sm">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-gray-800">MyShop Admin</h1>
      </div>

      <nav className="flex flex-col p-4 space-y-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.id}
              href={item.path}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? "bg-[#fce9ec] text-[#db4444]"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.text}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
