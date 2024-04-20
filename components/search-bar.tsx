"use client";

import { Icons } from "@/components/icons";
import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import { useDebouncedCallback } from "use-debounce";

export function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    params.delete("tag");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    push(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="group relative mb-8">
      <Icons.search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-border transition-colors group-has-[:focus]:text-primary" />
      <Input
        className="h-12 rounded-full px-10"
        type="search"
        placeholder="Search posts by title..."
        defaultValue={searchParams.get("query")?.toString()}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
