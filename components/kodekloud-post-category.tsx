import { Icons } from "@/components/icons";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import React from "react";

interface KodeKloudPostCategoryProps {
  categories: string[];
  selectedCategory: string | null;
  onSelect: (category: string) => void;
  onClear: () => void;
}

export function KodeKloudPostCategory({
  categories,
  selectedCategory,
  onSelect,
  onClear,
}: KodeKloudPostCategoryProps) {
  return (
    <div className="flex items-center justify-between">
      <Select
        onValueChange={onSelect}
        value={selectedCategory || undefined}
        key={selectedCategory}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue>
            {(selectedCategory && selectedCategory) || "Select a category..."}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedCategory && (
        <button onClick={onClear} className="group flex items-center space-x-1">
          <span className="sr-only">Clear category</span>
          <span className="text-sm text-neutral-500 group-hover:text-neutral-700">
            Clear category
          </span>
        </button>
      )}
    </div>
  );
}
