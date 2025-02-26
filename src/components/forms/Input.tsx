import React, { useId } from "react";
import {
  Input as FormInput,
  type InputProps as FormInputProps,
} from "@heroui/react";
import {
  ControllerRenderProps,
  type FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { parseInput } from "@/lib/helpers/input";
import { cn } from "@/lib/utils";

type InputProps<T extends FieldValues> = FormInputProps &
  UseControllerProps<T> &
  Partial<ControllerRenderProps<T>>;

const Input = <T extends FieldValues>({
  name,
  control,
  rules,
  type = "text",
  radius = "none",
  variant = "faded",
  className = "",
  isClearable = true,
  ...props
}: InputProps<T>) => {
  const id = useId();
  const {
    field: input,
    fieldState: { error, invalid },
  } = useController({
    name,
    control,
    rules,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInput(type, e.target);
    input.onChange(value);
    props.onChange?.(e);
  };

  const handleClear = () => {
    if (!isClearable) return;
    const defaultValue = type === "number" ? 0 : type === "file" ? undefined : "";
    input.onChange(defaultValue);
  };

  return (
    <FormInput
      {...props}
      id={id}
      className={cn(className)}
      isClearable={isClearable}
      type={type}
      value={type === "file" ? undefined : input.value}
      radius={radius}
      variant={variant}
      onChange={handleChange}
      onClear={handleClear}
      isInvalid={invalid}
      errorMessage={error?.message}
    />
  );
};

export default Input;
