import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { KodeKloudPostsHook } from "@/types";

type KodeKloudPostCategoryProps = {
  categories: string[];
  selectedCategory: string | null;
  onSelect: (category: string) => void;
  onClear: () => void;
};

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
    </div>
  );
}
