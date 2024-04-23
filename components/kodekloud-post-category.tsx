import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { KodeKloudPostsHook } from "@/types";

type KodeKloudPostCategoryProps = Pick<
  KodeKloudPostsHook,
  "categories" | "selectedCategory" | "onSelectCategory"
>;

export function KodeKloudPostCategory({
  categories,
  selectedCategory,
  onSelectCategory,
}: KodeKloudPostCategoryProps) {
  return (
    <div className="flex items-center justify-between">
      <Select
        onValueChange={onSelectCategory}
        value={selectedCategory || undefined}
        key={selectedCategory}
      >
        <SelectTrigger className="w-[180px]">
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
