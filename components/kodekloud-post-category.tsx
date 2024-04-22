import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";


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
        <SelectTrigger className="w-[220px]">
          <SelectValue placeholder="Select a category" />
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
        <Button
          size="sm"
          onClick={onClear}
          className="border border-lime-200 bg-lime-100 text-lime-800 hover:bg-lime-200"
        >
          Clear filter
        </Button>
      )}
    </div>
  );
}
