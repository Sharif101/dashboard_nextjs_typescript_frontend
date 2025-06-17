"use client";

import { useState, useCallback } from "react";
import { ArrowLeft, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Select from "react-select";
import { Card } from "@/components/ui/card";
import { SingleValue } from "react-select";
import {
  brandOptions,
  categories,
  colorOptions,
  conditions,
  features,
  modelOptions,
  ramOptions,
  storageOptions,
} from "@/utils/static";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  preview: string;
}

export default function AddProduct() {
  const [productTitle, setProductTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);

  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [storage, setStorage] = useState("");
  const [ram, setRam] = useState("");
  const [color, setColor] = useState("");
  const [consditionSelected, setConditionSelected] = useState<string>("New");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [price, setPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sku, setSku] = useState("");
  const [negotiation, setNagotitation] = useState<boolean>(false);

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setSelectedFeatures((prev) =>
      checked ? [...prev, feature] : prev.filter((f) => f !== feature)
    );
  };

  // console.log({
  //   consditionSelected,
  //   selectedFeatures,
  //   uploadedFiles,
  //   category,
  //   brand,
  //   model,
  //   storage,
  //   ram,
  //   color,
  // });

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    processFiles(files);
  }, []);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      processFiles(files);
    },
    []
  );

  const processFiles = (files: File[]) => {
    const validFiles = files.filter((file) => {
      const isValidType = [
        "image/png",
        "image/jpeg",
        "image/jpg",
        "image/webp",
      ].includes(file.type);
      const isValidSize = file.size <= 5 * 1024 * 1024;
      return isValidType && isValidSize;
    });

    validFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newFile: UploadedFile = {
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          size: file.size,
          preview: e.target?.result as string,
        };
        setUploadedFiles((prev) => [...prev, newFile]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== id));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  type OptionType = {
    label: string;
    value: string;
  };

  const handleChangeCategory = (selectedOption: SingleValue<OptionType>) => {
    setCategory(selectedOption?.value || "");
  };

  const handleChangeBrand = (selectedOption: SingleValue<OptionType>) => {
    setBrand(selectedOption?.value || "");
  };

  const handleChangeModel = (selectedOption: SingleValue<OptionType>) => {
    setModel(selectedOption?.value || "");
  };

  const handleChangeStorage = (selectedOption: SingleValue<OptionType>) => {
    setStorage(selectedOption?.value || "");
  };

  const handleChangeRam = (selectedOption: SingleValue<OptionType>) => {
    setRam(selectedOption?.value || "");
  };

  const handleChangeColor = (selectedOption: SingleValue<OptionType>) => {
    setColor(selectedOption?.value || "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const details = {
      product_title: productTitle,
      description: description,
      product_images: uploadedFiles,
      category: category,
      brand: brand,
      model: model,
      storage: storage,
      ram: ram,
      color: color,
      product_condition: consditionSelected,
      product_feature: selectedFeatures,
      price: price,
      sale_price: salePrice,
      quantity: quantity,
      sku: sku,
    };

    console.log(details);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 p-6 overflow-y-auto">
      <form className="w-full h-full" onSubmit={handleSubmit}>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Button variant="ghost" size="sm" className="p-1 h-8 w-8">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-semibold text-gray-900">
              Add New Product
            </h1>
          </div>
          <p className="text-gray-600 ml-11">
            Fill in the details to list your product for sale
          </p>
        </div>

        <Card className="p-6 bg-white shadow-sm border border-gray-200 w-full">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-6">
                General Information
              </h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="product-title">
                    Product Title <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="product-title"
                    placeholder="Enter product name"
                    value={productTitle}
                    onChange={(e) => setProductTitle(e.target.value)}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">
                    Description <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Enter product description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-[120px] resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label>
                    Product Images <span className="text-red-500">*</span>
                  </Label>
                  <div
                    className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                      isDragOver
                        ? "border-blue-400 bg-blue-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      multiple
                      accept="image/png,image/jpeg,image/jpg,image/webp"
                      onChange={handleFileSelect}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="space-y-4">
                      <div className="mx-auto w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg">
                        <Upload className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-base font-medium text-gray-900 mb-1">
                          Drag & drop product images
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          or click to browse files (PNG, JPG, WEBP up to 5MB
                          each)
                        </p>
                        <Button variant="outline" size="sm">
                          Select Files
                        </Button>
                      </div>
                    </div>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="mt-4 space-y-3">
                      <p className="text-sm font-medium text-gray-700">
                        Uploaded Images ({uploadedFiles.length})
                      </p>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {uploadedFiles.map((file) => (
                          <div key={file.id} className="relative group">
                            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                              <img
                                src={file.preview}
                                alt={file.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <button
                              onClick={() => removeFile(file.id)}
                              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X className="w-3 h-3" />
                            </button>
                            <div className="mt-1">
                              <p className="text-xs text-gray-600 truncate">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-400">
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="border border-gray-300 rounded-md bg-white">
                  <Select
                    options={categories}
                    placeholder="Categories"
                    onChange={handleChangeCategory}
                    classNamePrefix="react-select"
                    menuPortalTarget={
                      typeof window !== "undefined" ? document.body : null
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* ------second part specifications--------- */}

        <Card className="p-6 bg-white shadow-sm border border-gray-200 w-full space-y-6 mt-6">
          <div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-medium">Specifications</p>
              <Button variant="ghost" className="text-sm text-blue-500">
                + Add another specification
              </Button>
            </div>

            <div>
              <Label className="mb-2">
                Brand <span className="text-red-500">*</span>
              </Label>
              <div className="border border-gray-300 rounded-md bg-white">
                <Select
                  options={brandOptions}
                  placeholder="Categories"
                  onChange={handleChangeBrand}
                  classNamePrefix="react-select"
                  menuPortalTarget={
                    typeof window !== "undefined" ? document.body : null
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 my-4">
              <div>
                <Label className="mb-2">
                  Model <span className="text-red-500">*</span>
                </Label>
                <div className="border border-gray-300 rounded-md bg-white">
                  <Select
                    options={modelOptions}
                    placeholder="Categories"
                    onChange={handleChangeModel}
                    classNamePrefix="react-select"
                    menuPortalTarget={
                      typeof window !== "undefined" ? document.body : null
                    }
                  />
                </div>
              </div>

              <div>
                <Label className="mb-2">
                  Storage <span className="text-red-500">*</span>
                </Label>
                <div className="border border-gray-300 rounded-md bg-white">
                  <Select
                    options={storageOptions}
                    placeholder="Categories"
                    onChange={handleChangeStorage}
                    classNamePrefix="react-select"
                    menuPortalTarget={
                      typeof window !== "undefined" ? document.body : null
                    }
                  />
                </div>
              </div>

              <div>
                <Label className="mb-2">
                  RAM <span className="text-red-500">*</span>
                </Label>
                <div className="border border-gray-300 rounded-md bg-white">
                  <Select
                    options={ramOptions}
                    placeholder="Categories"
                    onChange={handleChangeRam}
                    classNamePrefix="react-select"
                    menuPortalTarget={
                      typeof window !== "undefined" ? document.body : null
                    }
                  />
                </div>
              </div>

              <div>
                <Label className="mb-2">
                  Color <span className="text-red-500">*</span>
                </Label>
                <div className="border border-gray-300 rounded-md bg-white">
                  <Select
                    options={colorOptions}
                    placeholder="Categories"
                    onChange={handleChangeColor}
                    classNamePrefix="react-select"
                    menuPortalTarget={
                      typeof window !== "undefined" ? document.body : null
                    }
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="block mb-2">
                  Condition <span className="text-red-500">*</span>
                </Label>
                <div className="flex flex-col gap-1">
                  {conditions.map((condition) => (
                    <div
                      key={condition}
                      className="flex items-center space-x-2 mt-2"
                    >
                      <Checkbox
                        checked={consditionSelected === condition}
                        onCheckedChange={() => setConditionSelected(condition)}
                        id={condition}
                        className={`
                            rounded-full
                            bg-white
                            border-gray-300
                            data-[state=checked]:border-sky-500
                            data-[state=checked]:text-sky-500
                            data-[state=checked]:bg-white
                          `}
                      />
                      <Label htmlFor={condition} className="font-normal">
                        {condition}
                      </Label>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="mt-2 text-blue-500 text-sm">
                  + Add condition
                </Button>
              </div>

              <div>
                <Label className="block mb-2">
                  Features <span className="text-red-500">*</span>
                </Label>
                <div className="grid grid-cols-2 gap-2">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center space-x-2 my-1"
                    >
                      <Checkbox
                        id={feature}
                        checked={selectedFeatures.includes(feature)}
                        onCheckedChange={(checked: boolean) =>
                          handleFeatureChange(feature, checked)
                        }
                        className={`
                            rounded-full
                            bg-white
                            border-gray-300
                            data-[state=checked]:border-sky-500
                            data-[state=checked]:text-sky-500
                            data-[state=checked]:bg-white
                          `}
                      />
                      <Label htmlFor={feature} className="font-normal">
                        {feature}
                      </Label>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="mt-2 text-blue-500 text-sm">
                  + Add another feature
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* ----trid part pricing----- */}

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

          {/* Additional Information */}
          {/* <div>
            <p className="text-lg font-medium mb-4">Additional Information</p>
            <div className="space-y-4">
              <Input placeholder="Tags (e.g. smartphone, android, 5G)" />
              <Input placeholder="SEO Title" />
              <Input placeholder="SEO Description" />
            </div>
          </div> */}
        </Card>

        {/* --------four part---------- */}
        <Card className="p-6 bg-white shadow-sm border border-gray-200 w-full space-y-6 mt-6">
          <div className="flex items-center gap-2">
            <Checkbox id="negotiation" />
            <Label htmlFor="negotiation">Enable Negotiation</Label>
          </div>
        </Card>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
