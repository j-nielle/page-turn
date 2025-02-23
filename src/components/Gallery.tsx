"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import RateStars from "@/components/user-activity/RateStars";
import { Novel } from "@/lib/types/novel";

interface GalleryProps {
  items: Novel[];
  hasControls: boolean;
}

export default function Gallery({ items, hasControls = false }: GalleryProps) {
  const [readMoreStates, setReadMoreStates] = useState<Record<number, boolean>>(
    {}
  );

  const toggleReadMore = (id: number) => {
    setReadMoreStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
              isExpanded={!!readMoreStates[item.id]}
              toggleReadMore={toggleReadMore}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

interface GalleryItemProps {
  item: Novel;
  isExpanded: boolean;
  toggleReadMore: (id: number) => void;
}

function GalleryItem({ item, isExpanded, toggleReadMore }: GalleryItemProps) {
  const descriptionClasses = cn(
    "text-white/80 transition-transform duration-300 ease-in",
    {
      "line-clamp-none": isExpanded,
      "text-ellipsis line-clamp-1 max-h-32 overflow-hidden pr-28": !isExpanded,
    }
  );

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
        <span className="flex flex-row gap-4">
          <a
            href={item.translatedNovelUrl ?? ""}
            className="text-lg font-semibold">
            {item.title}
          </a>
          <RateStars rate={item.rating} reviewsUrl={item.reviewsUrl ?? ""} />
        </span>
        <p
          className={descriptionClasses}
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
        <button
          className="text-white w-32 text-left cursor-pointer hover:underline hover:underline-offset-3"
          onClick={() => toggleReadMore(item.id)}>
          Read {isExpanded ? "less" : "more"}
        </button>
      </div>
    </CarouselItem>
  );
}
