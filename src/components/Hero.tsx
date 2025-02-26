import React from "react";
import { Recommendations, RecentlyUpdated } from "@/components/novel";

export default function Hero() {
  return (
    <>
      <div className="dark:bg-muted/60 outline outline-1 outline-white/20 h-96 bg-[#141c27] mt-4 text-white flex justify-between flex-col gap-4 text-wrap">
        <Recommendations />
      </div>
      <RecentlyUpdated />
    </>
  );
}
