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

export default function Products() {
  return (
    <div>
      <div className="flex items-center justify-between p-4">
        <h2 className="text-[25px] font-semibold text-gray-800">Products</h2>
        <Button variant="primary">+ Add Product</Button>
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
            <TableRow>
              <TableCell>--</TableCell>
              <TableCell>Premium Cotton Shirt</TableCell>
              <TableCell>TS-001</TableCell>
              <TableCell>$100</TableCell>
              <TableCell>200</TableCell>
              <TableCell className="text-green-600 font-medium">
                Active
              </TableCell>
              <TableCell className="text-blue-500 cursor-pointer">
                Edit, Delete
              </TableCell>
            </TableRow>
            {/* Repeat rows as needed */}

            <TableRow>
              <TableCell>--</TableCell>
              <TableCell>Premium Cotton Shirt</TableCell>
              <TableCell>TS-001</TableCell>
              <TableCell>$100</TableCell>
              <TableCell>200</TableCell>
              <TableCell className="text-green-600 font-medium">
                Active
              </TableCell>
              <TableCell className="text-blue-500 cursor-pointer">
                Edit, Delete
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>--</TableCell>
              <TableCell>Premium Cotton Shirt</TableCell>
              <TableCell>TS-001</TableCell>
              <TableCell>$100</TableCell>
              <TableCell>200</TableCell>
              <TableCell className="text-green-600 font-medium">
                Active
              </TableCell>
              <TableCell className="text-blue-500 cursor-pointer">
                Edit, Delete
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
