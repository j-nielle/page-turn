import { cn } from "@/lib/utils";
import React, { useId } from "react";

interface StarRatingProps {
  className?: string;
  totalStars?: number;
  rating?: number;
  reviewsUrl?: string;
  children?: React.ReactNode;
  setRating?: (index: number) => void;
}
const StarRating = ({
  totalStars = 5,
  rating = 0,
  className = "",
  reviewsUrl = "",
  setRating,
}: StarRatingProps) => {
  const id = useId();

  const handleRating = (index: number) => {
    if (setRating) {
      setRating(index);
    }
  };

  return (
    <div
      className={cn(className, {
        "flex items-center": reviewsUrl !== "",
      })}>
      <div className={cn("flex flex-row gap-1 items-center")}>
        {[...Array(totalStars)].map((_, index) => (
          <svg
            key={index}
            viewBox="0 0 22 22"
            stroke="#9c7000"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => handleRating(index)}
            width="24"
            height="24">
            <defs>
              <linearGradient id={`${id}-star-${index}`}>
                <stop offset="100%" stopColor="#f5b100" />
              </linearGradient>
            </defs>
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
              fill={index < rating ? `url(#${id}-star-${index})` : "#f4f4f4"}
            />
          </svg>
        ))}
        {reviewsUrl !== "" && (
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
  );
};

export default StarRating;
