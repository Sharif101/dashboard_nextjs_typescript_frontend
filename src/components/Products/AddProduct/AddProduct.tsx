"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import GenerelInfo from "./GenerelInfo/GenerelInfo";
import Specifications from "./Specifications/Specifications";
import Pricing from "./Pricing/Pricing";
import Additional from "./Additional/Additional";

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

        <GenerelInfo
          isDragOver={isDragOver}
          setIsDragOver={setIsDragOver}
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
          description={description}
          setDescription={setDescription}
          productTitle={productTitle}
          setProductTitle={setProductTitle}
          category={category}
          setCategory={setCategory}
        />

        {/* ------second part specifications--------- */}
        <Specifications
          brand={brand}
          setBrand={setBrand}
          model={model}
          setModel={setModel}
          storage={storage}
          setStorage={setStorage}
          ram={ram}
          setRam={setRam}
          color={color}
          setColor={setColor}
          consditionSelected={consditionSelected}
          setConditionSelected={setConditionSelected}
          selectedFeatures={selectedFeatures}
          setSelectedFeatures={setSelectedFeatures}
          handleFeatureChange={handleFeatureChange}
        />

        {/* ----trid part pricing----- */}
        <Pricing
          price={price}
          setPrice={setPrice}
          salePrice={salePrice}
          setSalePrice={setSalePrice}
          quantity={quantity}
          setQuantity={setQuantity}
          sku={sku}
          setSku={setSku}
          negotiation={negotiation}
          setNegotiation={setNagotitation}
        />

        {/* --------four part---------- */}
        <Additional />

        <div className="mt-4 flex justify-end">
          <Button variant="primary" type="submit" className="w-[10em]">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
