"use client";

import { getDescriptionClass } from "@/lib/helpers/novel";
import useToggleStates from "@/lib/hooks/useToggleState";
import { cn } from "@/lib/utils";
import React, { useId, useRef } from "react";

interface NovelDescProps extends Partial<React.ComponentProps<"div">> {
  className?: string;
  title?: string;
  desc: string;
  extraText?: string;
}

export default function NovelDesc(props: NovelDescProps) {
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const id = useId();
  const { states: expand, toggleState: toggleExpand } = useToggleStates<string>(
    {}
  );
  const descriptionClass = getDescriptionClass(expand[id], {
    expandedClass: "max-h-40 scroll-size-1",
    collapsedClass: "max-h-12",
  });

  const handleToggle = () => {
    if (!descriptionRef) return;

    if (expand[id] && descriptionRef.current) {
      descriptionRef.current.scrollTop = 0;
    }
    toggleExpand(id);
  }

  return (
    <div
      id={id}
      className={cn(
        "absolute top-0 p-6 text-white w-full flex flex-col items-start justify-end",
        props.className
      )}>
      <h5 className="mb-2 text-xl font-semibold leading-tight">
        {props.title}
      </h5>
      <p ref={descriptionRef} className={descriptionClass}>{props.desc}</p>
      <p className="text-base">
        <small>{props.extraText}</small>
      </p>

      <button
        className="text-white w-32 text-left cursor-pointer hover:underline hover:underline-offset-3"
        onClick={handleToggle}>
        Read {expand[id] ? "less" : "more"}
      </button>
    </div>
  );
}
