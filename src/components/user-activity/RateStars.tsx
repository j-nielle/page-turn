import { cn } from "@/lib/utils";
import React, { useState, useId, useRef } from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

interface StarProps {
  filled: boolean;
  onClick: () => void;
  bgColor?: string;
}

const Star = ({ filled, onClick, bgColor = "#f4f4f4" }: StarProps) => {
  return (
    <svg
      viewBox="0 0 22 22"
      stroke="#9c7000"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      width="24"
      height="24"
      style={{ cursor: "pointer" }}>
      <defs>
        <linearGradient id="starGradient">
          <stop offset="100%" stopColor="#f5b100" />
        </linearGradient>
      </defs>
      <path
        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
        fill={filled ? "url(#starGradient)" : bgColor}
      />
    </svg>
  );
};

interface Props {
  className?: string;
  totalStars?: number;
  rating?: number;
  readOnly: boolean;
  reviewsUrl?: string;
  onRatingChange?: (index: number) => void;
}

type RateStarsProps<T extends FieldValues> = Props & UseControllerProps<T>;

const RateStars = <T extends FieldValues>({
  totalStars = 5,
  rating = 0,
  onRatingChange,
  readOnly = true,
  name,
  control,
  rules,
  className = "",
  reviewsUrl = "",
  ...props
}: RateStarsProps<T>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();
  const controller = useController({ name, control, rules });

  const field = readOnly
    ? { value: rating, onChange: () => {} }
    : controller.field;
  
  const [currentRating, setCurrentRating] = useState<number>(
    readOnly ? Math.round(rating) : field.value || Math.round(rating)
  );

  const handleClick = (index: number) => {
    if (readOnly) return;

    const newRating = index + 1;
    setCurrentRating(newRating);
    field.onChange(newRating);

    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <>
      {!readOnly && (
        <input
          {...props}
          {...field}
          id={id}
          ref={inputRef}
          type="hidden"
          name={name}
          value={currentRating}
        />
      )}
      <div
        className={cn(className, {
          "flex items-center": reviewsUrl !== "",
        })}>
        <div
          className={cn("flex flex-row gap-1", { "items-center": readOnly })}>
          {[...Array(totalStars)].map((_, index) => (
            <Star
              key={index}
              filled={index < currentRating}
              onClick={() => handleClick(index)}
            />
          ))}
          {reviewsUrl && (
            <>
              <span className="w-1 h-1 mx-1.5 rounded-full bg-gray-400"></span>
              <a
                href={reviewsUrl}
                className="text-sm font-medium hover:underline text-white">
                Read reviews
              </a>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RateStars;
