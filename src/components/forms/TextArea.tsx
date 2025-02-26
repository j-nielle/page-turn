import React, { useId } from "react";
import {
  Textarea,
  type TextAreaProps as HeroUITextAreaProps,
} from "@heroui/input";
import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { cn } from "@/lib/utils";

type TextAreaProps<T extends FieldValues> = HeroUITextAreaProps &
  UseControllerProps<T>;

const TextArea = <T extends FieldValues>({
  name,
  control,
  rules,
  radius = "none",
  variant = "faded",
  className = "",
  ...rest
}: TextAreaProps<T>) => {
  const id = useId();
  const {
    field: input,
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
    rules,
  });
  return (
    <Textarea
      {...rest}
      {...input}
      id={id}
      radius={radius}
      variant={variant}
      className={cn(className)}
      isInvalid={invalid}
      errorMessage={error?.message}
    />
  );
};

export default TextArea;
