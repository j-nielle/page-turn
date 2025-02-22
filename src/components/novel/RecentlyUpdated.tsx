import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function RecentlyUpdated() {
  return (
    <div className="flex-grow w-full">
      <div className="rounded-md border">
        <div className="p-4 text-lg font-medium leading-none flex flex-row justify-between border">
          <p className="">Recently Translated Series</p>
        </div>
        <ScrollArea className="h-44 md:h-80">
          <div className="p-4">
            {/* {recents?.map((item) => (
					<div key={`${item.series.id}-${item.chapter}`} className="text-xs">
						<a className="flex justify-between items-center" href={item.srcurl}>
							<p className="hover:underline hover:cursor-pointer">{item.series.name} (CH {item.chapter})</p>
							<p className="text-gray-600">{item.published}</p>
						</a>
						<Separator className="my-3" />
					</div>
				))} */}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
