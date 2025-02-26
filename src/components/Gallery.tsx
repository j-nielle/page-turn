"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StarRating from "@/components/user-activity/StarRating";
import { getDescriptionClass } from "@/lib/helpers/novel";
import { DevPicks } from "@/lib/types/novel";
import useToggleStates from "@/lib/hooks/useToggleState";
import { cn } from "@/lib/utils";

interface GalleryProps {
  items: DevPicks[];
  hasControls: boolean;
}

export default function Gallery({ items, hasControls = false }: GalleryProps) {
  const { states: expand, toggleState: toggleExpand } = useToggleStates<number>(
    {}
  );

  return (
    <div className="relative">
      <div className="absolute z-20 right-0 -top-3.5 w-full flex justify-center">
        <p className="bg-indigo-600 px-4 py-1 text-center rounded-full ">
          Coder&apos;s Curations
        </p>
      </div>

      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}>
        {hasControls && (
          <>
            <div className="flex px-4 gap-x-3 right-0 justify-end absolute bottom-4 z-10 *:!bg-white *:!text-black">
              <CarouselPrevious variant="default" />
              <CarouselNext variant="default" />
            </div>
          </>
        )}

        <CarouselContent className="!z-10">
          {items.map((item) => (
            <GalleryItem
              key={item.id}
              item={item}
              isExpanded={expand[item.id]}
              toggleExpand={toggleExpand}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

interface GalleryItemProps {
  item: DevPicks;
  isExpanded: boolean;
  toggleExpand: (id: number) => void;
}

function GalleryItem({ item, isExpanded, toggleExpand }: GalleryItemProps) {
  const descriptionClass = getDescriptionClass(isExpanded, "max-h-7");

  return (
    <CarouselItem className="overflow-hidden relative z-50">
      <div className="h-96 w-full relative">
        <Image
          alt={item.title}
          className="z-0 w-screen object-cover object-top md:object-left"
          src={item.coverUrl}
          fill
        />
      </div>

      <div className="absolute bottom-0 space-y-3 left-4 *:relative right-0 p-4 before:absolute before:inset-0 before:bg-black/60 before:blur-lg">
        <span
          className={cn("flex-col sm:flex-row gap-4", {
            "hidden min-[490px]:flex": isExpanded,
            "min-[490px]:flex ": !isExpanded,
          })}>
          <a
            href={item.translatedNovelUrl ?? ""}
            className="text-lg font-semibold">
            {item.title}
          </a>
          <StarRating rating={item.rating} reviewsUrl={item.reviewsUrl ?? ""} />
        </span>
        <p
          className={descriptionClass}
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
        <button
          className="text-white w-32 text-left cursor-pointer hover:underline hover:underline-offset-3"
          onClick={() => toggleExpand(item.id)}>
          Read {isExpanded ? "less" : "more"}
        </button>
      </div>
    </CarouselItem>
  );
}
