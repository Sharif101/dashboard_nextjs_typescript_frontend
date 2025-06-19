import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Select from "react-select";
import { SingleValue } from "react-select";
import {
  brandOptions,
  colorOptions,
  conditions,
  features,
  modelOptions,
  ramOptions,
  storageOptions,
} from "@/utils/static";
import { Checkbox } from "@/components/ui/checkbox";

type SpecificationsProps = {
  brand: string;
  setBrand: (val: string) => void;
  model: string;
  setModel: (val: string) => void;
  storage: string;
  setStorage: (val: string) => void;
  ram: string;
  setRam: (val: string) => void;
  color: string;
  setColor: (val: string) => void;
  consditionSelected: string;
  setConditionSelected: (val: string) => void;
  selectedFeatures: string[];
  setSelectedFeatures: (val: string[]) => void;
  handleFeatureChange: (feature: string, checked: boolean) => void;
};

type OptionType = {
  label: string;
  value: string;
};

export default function Specifications(props: SpecificationsProps) {
  const {
    setBrand,
    setModel,
    setStorage,
    setRam,
    setColor,
    consditionSelected,
    setConditionSelected,
    selectedFeatures,
    handleFeatureChange,
  } = props;

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

  return (
    <div>
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
    </div>
  );
}
