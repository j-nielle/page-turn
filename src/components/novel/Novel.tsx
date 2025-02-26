import React, { useId } from "react";
import { parseTitle } from "@/lib/helpers/novel";
import { cn } from "@/lib/utils";
import { Image } from "@/components/ui/image";
import NovelDesc from "./NovelDesc";

interface NovelCardProps {
  className?: string;
  title: string;
  desc: string;
  extraText?: string;
  imgUrl?: string;
  imgWidth?: number;
  imgHeight?: number;
  viewType?: 'list-view' | 'grid-view'
}

export default function Novel({
  className,
  title,
  desc,
  extraText,
  imgUrl,
  imgWidth = 400,
  imgHeight = 600,
  viewType = 'grid-view'
}: NovelCardProps) {
  const id = useId();
  const novelTitle = parseTitle(title);
  const novelDesc = { title, desc, extraText };

  return (
    <>
      {viewType === 'grid-view' ? (
        <article id={id} className="relative">
          <button type="button">
            <div className={cn("block overflow-hidden", className)}>
              <Image
                className="!rounded-none"
                width={imgWidth}
                height={imgHeight}
                url={imgUrl}
                alt={title}
                text={novelTitle}
              />
            </div>
          </button>
          <NovelDesc {...novelDesc} />
        </article>
      ) : (
        <article className="flex w-full gap-3 items-center p-2 border-2 border-default-200">
          <div className="max-w-20 min-h-32 self-center p-3 bg-red-500 inline-flex justify-center items-center">
            *image*
          </div>
          <article className="flex flex-row justify-between items-start w-full self-start">
            <div className="flex flex-col justify-between">
              <button className="font-semibold uppercase">Placeholder Title</button>
              <p>Placeholder Description</p>
            </div>
          </article>
          <div className="flex flex-row gap-2 self-start">
            <button>Delete</button>
            <button>Edit</button>
          </div>
        </article>
      )}
    </>
  );
}
