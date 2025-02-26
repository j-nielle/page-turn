import React, { useState, useId, useRef } from "react";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import StarRating from "./StarRating";

interface Props {
  totalStars?: number;
  rating?: number;
  onRatingChange?: (index: number) => void;
}

type RateStarsProps<T extends FieldValues> = Props & UseControllerProps<T>;

const SetNovelRating = <T extends FieldValues>({
  rating = 0,
  onRatingChange,
  name,
  control,
  rules,
  ...props
}: RateStarsProps<T>) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();
  const controller = useController({ name, control, rules });

  const field = controller.field;

  const [currentRating, setCurrentRating] = useState<number>(
    field.value || Math.round(rating)
  );

  const handleClick = (index: number) => {
    const newRating = index + 1;
    setCurrentRating(newRating);
    field.onChange(newRating);

    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <>
      <input
        {...props}
        {...field}
        id={id}
        ref={inputRef}
        type="hidden"
        name={name}
        value={currentRating}
      />
      <StarRating rating={currentRating} setRating={handleClick} />
    </>
  );
};

export default SetNovelRating;
