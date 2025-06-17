import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { categories } from "@/utils/static";
import { Upload, X } from "lucide-react";
import React, { useCallback } from "react";
import Select from "react-select";
import { SingleValue } from "react-select";

type UploadedFile = {
  id: string;
  name: string;
  size: number;
  preview: string;
};

type GenerelInfoProps = {
  isDragOver: boolean;
  setIsDragOver: (val: boolean) => void;
  uploadedFiles: UploadedFile[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<UploadedFile[]>>;
  description: string;
  setDescription: (val: string) => void;
  productTitle: string;
  setProductTitle: (val: string) => void;
  category: string;
  setCategory: (val: string) => void;
};

type OptionType = {
  label: string;
  value: string;
};

export default function GenerelInfo(props: GenerelInfoProps) {
  const {
    isDragOver,
    setIsDragOver,
    uploadedFiles,
    setUploadedFiles,
    description,
    setDescription,
    productTitle,
    setProductTitle,
    category,
    setCategory,
  } = props;

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

  const handleChangeCategory = (selectedOption: SingleValue<OptionType>) => {
    setCategory(selectedOption?.value || "");
  };

  return (
    <div>
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
                        or click to browse files (PNG, JPG, WEBP up to 5MB each)
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
    </div>
  );
}
