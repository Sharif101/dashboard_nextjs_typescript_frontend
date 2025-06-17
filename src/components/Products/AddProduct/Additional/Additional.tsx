import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Additional() {
  return (
    <div>
      <Card className="p-6 bg-white shadow-sm border border-gray-200 w-full space-y-6 mt-6">
        <div>
          <p className="text-lg font-medium mb-4">Additional Information</p>
          <div className="space-y-4">
            <div>
              <Label className="mb-2">
                Tags <span className="text-red-500">*</span>
              </Label>
              <Input placeholder="Tags" />
            </div>
            <div>
              <Label className="mb-2">
                SEO Title <span className="text-red-500">*</span>
              </Label>
              <Input placeholder="SEO Title" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">
                SEO Description <span className="text-red-500">*</span>
              </Label>
              <Textarea
                placeholder="SEO Description"
                className="min-h-[120px] resize-none"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
