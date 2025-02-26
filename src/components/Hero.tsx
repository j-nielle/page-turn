import React from "react";
import { Recommendations, RecentlyUpdated } from "@/components/novel";

export default function Hero() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="dark:bg-muted/60 w-full sm:w-3/4 outline outline-1 outline-white/20 h-96 bg-[#141c27] text-white flex justify-between flex-col gap-4 text-wrap">
        <Recommendations />
      </div>
      <RecentlyUpdated />
    </div>
  );
}
