"use client";

import React, { useId } from "react";
import Image from "next/image";
import type { ImageProps as NextImageProps } from "next/image";
import { cn } from "@/lib/utils";

type ImageProps = Partial<NextImageProps> & React.ComponentProps<"img"> & {
  url?: string;
  text?: string;
};

const ImageComponent = (props: ImageProps) => {
  const id = useId();
  return (
    <div className="sticky" key={props.key}>
      <Image
        id={id}
        ref={props.ref}
        alt={props.alt ?? "Novel Image"}
        height={props.height}
        width={props.width}
        fill
        src={
          props.url ??
          `https://placehold.co/${props.width}x${props.height}.png?text=${props.text}`
        }
        className={cn(
          "rounded-lg antialiased object-cover transition-opacity duration-100 hover:opacity-75",
          props.className,
        )}
      />
    </div>
  );
};
ImageComponent.displayName = "Image";

export { ImageComponent as Image };
