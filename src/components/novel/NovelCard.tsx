import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface NovelCardProps {
  className?: string;
  title: string;
  desc: string;
  extraText?: string;
  imgUrl: string;
}

export default function NovelCard({
  className,
  title,
  desc,
  extraText,
  imgUrl,
}: NovelCardProps) {
  return (
    <div className="relative">
      <div className="block rounded-lg overflow-hidden">
        <div className="relative">
          <Image
            className={cn(
              "rounded-lg w-full antialiased object-cover transition-opacity duration-100 hover:opacity-75",
              className
            )}
            src={imgUrl}
            alt=""
            height={100}
            width={100}
          />
        </div>

        <div className={cn("absolute top-0 p-6 text-white", className)}>
          <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
          <p className="mb-4 text-base">{desc}</p>
          <p className="text-base">
            <small>{extraText}</small>
          </p>
        </div>
      </div>
    </div>
  );
}
