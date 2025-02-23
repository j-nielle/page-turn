"use client";
import React, {
  useEffect,
  useRef,
  useId,
  ComponentProps,
} from "react";
import { cn } from "@/lib/utils";
import {
  DefaultValues,
  FieldValues,
  SubmitHandler,
  useForm,
  type FormProps,
} from "react-hook-form";

export type Props<T extends FieldValues> = ComponentProps<"form"> &
  FormProps<T> & {
    defaultValues: DefaultValues<T>;
    onSubmitAction?: SubmitHandler<T>;
  };

const Form = <T extends FieldValues>({
  ref,
  onSubmitAction = () => {},
  defaultValues,
  children,
  ...props
}: Props<T>) => {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const methods = useForm<T>({
    defaultValues,
  });
  const { handleSubmit } = methods;

  useEffect(() => {
    if (typeof ref === "function") {
      ref(formRef.current);
    } else if (ref && typeof ref === "object") {
      ref.current = formRef.current;
    }

    return () => {
      if (typeof ref === "function") {
        ref(null);
      } else if (ref && typeof ref === "object") {
        ref.current = null;
      }
    };
  }, [ref]);

  function handleChange(e: React.ChangeEvent<HTMLFormElement>) {
    props.onChange?.(e);
  }

  function handleInput(e: React.FormEvent<HTMLFormElement>) {
    props.onInput?.(e);
  }

  return (
    <form
      id={id}
      ref={ref}
      method={props.method}
      action={props.action}
      onChange={handleChange}
      onInput={handleInput}
      className={cn(props.className)}
      onSubmit={handleSubmit(onSubmitAction)}>
      {children}
    </form>
  );
};

export default Form;
