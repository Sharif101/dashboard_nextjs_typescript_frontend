import React from "react";
import { Button } from "../ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Tab from "./Tab/Tab";
import Link from "next/link";
import { products } from "@/utils/data/orders/product";
import { ProductType } from "@/utils/data/orders/type";

export default function Products() {
  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-[25px] font-semibold text-gray-800">Products</h2>

        <Link href="/dashboard/products/addproduct">
          <Button variant="primary">+ Add Product </Button>
        </Link>
      </div>

      <Tab />

      <div className="bg-white p-6 rounded-md shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>SKU</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((item: ProductType, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>--</TableCell>
                  <TableCell>{item.product_title}</TableCell>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell className="text-green-600 font-medium">
                    Active
                  </TableCell>
                  <TableCell className="text-blue-500 cursor-pointer">
                    Edit, Delete
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
