"use client";

import React, { useId } from "react";
import NextImage from "next/image";
import {
  Image as HeroUIImage,
  type ImageProps as HeroUIImageProps,
} from "@heroui/react";
import { cn } from "@/lib/utils";

interface ImageProps extends Partial<HeroUIImageProps> {
  url?: string;
  width?: number;
  height?: number;
  text?: string;
  alt?: string;
  key?: React.Key;
}

const Image = (props: ImageProps) => {
  const id = useId();
  return (
    <div className="sticky" key={props.key}>
      <HeroUIImage
        id={id}
        ref={props.ref}
        as={NextImage}
        alt={props.alt ?? "Novel Image"}
        height={props.height}
        width={props.width}
        isBlurred
        src={
          props.url ??
          `https://placehold.co/${props.width}x${props.height}.png?text=${props.text}`
        }
        className={cn(
          "rounded-lg antialiased object-cover transition-opacity duration-100 hover:opacity-75",
          props.className, 
          // {
          //   "bg-blur": !props.url
          // },
        )}
      />
    </div>
  );
};
Image.displayName = "Image";

export { Image };
