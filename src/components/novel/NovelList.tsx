"use client";
import React from "react";
// import { Slider, type SliderValue } from "@heroui/react";
import Novel from "./Novel";
import { ImageSize } from "@/lib/types/image";
import { imageSizes } from "@/lib/constants/image";
import { ToggleListView } from "@/components/buttons/ToggleListView";
import { ViewTypes } from "@/lib/types/novel";
import { cn } from "@/lib/utils";

interface NovelListProps {
  className?: string;
}

export default function NovelList({ className }: NovelListProps) {
  // const [value, setValue] = React.useState<SliderValue>(1);
  const [view, setView] = React.useState<ViewTypes>('list-view');

  const sizes = React.useMemo<ImageSize[]>(() => imageSizes, []);

  const handleViewChange = (currentView: ViewTypes) => {
    setView(currentView);
  }

  return (
    <div className={cn(className)}>
      {/* <Slider
        className="max-w-sm"
        aria-label="Image sizes"
        color="foreground"
        defaultValue={1}
        minValue={0}
        maxValue={1}
        marks={[
          {
            value: 0,
            label: "sm",
          },
          {
            value: 1,
            label: "lg",
          },
        ]}
				hideValue
        size="sm"
        onChangeEnd={setValue}
      /> */}

      <article className="flex items-center justify-between gap-1 mb-4">
        <h2 className="font-semibold text-xl">My Novels</h2>
        <ToggleListView view={view} onViewChange={handleViewChange} />
      </article>
      <section className={cn({
        "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-start gap-x-2 gap-y-1": view === 'grid-view',
        "flex flex-col gap-2": view === 'list-view'
      })}>
        {[...Array(5)].map((_, index) => {
          return (
            <Novel key={index} viewType={view}
              desc="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              title="Hello World"
              imgWidth={sizes[1].width}
              imgHeight={sizes[1].height}
            />
          )
        })}
      </section>
    </div>
  );
}
