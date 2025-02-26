import React, { useId } from "react";
import {
  Select as FormSelect,
  SelectItem as FormSelectItem,
  type SelectProps as FormSelectProps,
} from "@heroui/react";
import {
  type FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { cn } from "@/lib/utils";

type SelectProps<T extends FieldValues> = Partial<FormSelectProps> &
  UseControllerProps<T> & {
    items?: {
      key: string;
      label: string;
    }[];
  };

const Select = <T extends FieldValues>({
  className,
  name,
  control,
  rules,
  items = [],
  radius = "none",
  variant = "faded",
  ...rest
}: SelectProps<T>) => {
  const id = useId();
  const {
    field: input,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    input.onChange(value);
  };

  return (
    <FormSelect
      {...rest}
      id={id}
      radius={radius}
      variant={variant}
      className={cn(className)}
      errorMessage={error?.message}
      onChange={handleChange}
      selectorIcon={<SelectorIcon />}>
      {items.map((item) => (
        <FormSelectItem key={item.key}>
          {item.label}
        </FormSelectItem>
      ))}
    </FormSelect>
  );
};

export default Select;

const SelectorIcon = (props: React.ComponentProps<"svg">) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="1em"
      {...props}>
      <path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <path d="M8 9l4 -4l4 4" />
      <path d="M16 15l-4 4l-4 -4" />
    </svg>
  );
};
