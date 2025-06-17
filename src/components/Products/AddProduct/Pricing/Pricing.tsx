import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

type PricingProps = {
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  salePrice: string;
  setSalePrice: React.Dispatch<React.SetStateAction<string>>;
  quantity: string;
  setQuantity: React.Dispatch<React.SetStateAction<string>>;
  sku: string;
  setSku: React.Dispatch<React.SetStateAction<string>>;
  negotiation: boolean;
  setNegotiation: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Pricing(props: PricingProps) {
  const {
    price,
    setPrice,
    salePrice,
    setSalePrice,
    quantity,
    setQuantity,
    sku,
    setSku,
    negotiation,
    setNegotiation,
  } = props;

  return (
    <div>
      <Card className="p-6 bg-white shadow-sm border border-gray-200 w-full space-y-6 mt-6">
        <div>
          <p className="text-lg font-medium mb-4">Pricing & Inventory</p>
          <div className="grid grid-cols-2 gap-4 my-4">
            <div>
              <Label className="mb-2">
                Price <span className="text-red-500">*</span>
              </Label>
              <Input
                placeholder="Price ($)"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <Label className="mb-2">
                Sale Price <span className="text-red-500">*</span>
              </Label>
              <Input
                placeholder="Sale Price ($)"
                value={salePrice}
                onChange={(e) => setSalePrice(e.target.value)}
              />
            </div>
            <div>
              <Label className="mb-2">
                Quantity <span className="text-red-500">*</span>
              </Label>
              <Input
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div>
              <Label className="mb-2">
                SKU <span className="text-red-500">*</span>
              </Label>
              <Input
                placeholder="SKU"
                value={sku}
                onChange={(e) => setSku(e.target.value)}
              />
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-white shadow-sm border border-gray-200 w-full space-y-6 mt-6">
        <div className="flex items-center gap-2">
          <Checkbox id="negotiation" />
          <Label htmlFor="negotiation">Enable Negotiation</Label>
        </div>
      </Card>
    </div>
  );
}
