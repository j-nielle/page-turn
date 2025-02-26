import React from "react";
import FilterNovels from "@/components/novel/FilterNovels";
import NovelList from "@/components/novel/NovelList";

export default function Browse() {
  return (
    <div className="dark:bg-muted/60 bg-[#141c27] text-white min-h-screen p-4 rounded flex flex-col gap-6">
      <FilterNovels />
    </div>
  );
}
