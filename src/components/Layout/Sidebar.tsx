"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Orders", href: "/dashboard/orders" },
  { label: "Products", href: "/dashboard/products" },
  { label: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r p-4 space-y-4">
      <div className="text-xl font-bold">MyShop Admin</div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "block px-4 py-2 rounded hover:bg-gray-100 text-sm",
              pathname.startsWith(item.href) ? "bg-gray-100 font-medium" : ""
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
