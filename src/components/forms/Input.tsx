import React, { useId } from "react";
import {
  Input as FormInput,
  type InputProps as FormInputProps,
} from "@heroui/react";
import {
  type FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";

type InputProps<T extends FieldValues> = FormInputProps & UseControllerProps<T>;

const Input = <T extends FieldValues>({
  name,
  control,
  rules,
  type = "text",
  ...rest
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

  React.useEffect(() => {
    console.log(error)
  },[error])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = type === "number" ? e.target.valueAsNumber : e.target.value;
    input.onChange(value);
  };

  const handleClear = () => {
    const defaultValue = type === "number" ? 0 : "";
    input.onChange(defaultValue);
  };

  return (
    <FormInput
      {...rest}
      {...input}
      id={id}
      type={type}
      onChange={handleChange}
      onClear={handleClear}
      isInvalid={invalid}
      errorMessage={error?.message}
    />
  );
};

export default Input;
