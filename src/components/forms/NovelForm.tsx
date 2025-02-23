"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import { initialFormValues } from "@/lib/types/novel";
import { novelSchema, type NovelSchema } from "@/lib/validators/novel";
import { novelLanguages, novelStatuses } from "@/lib/constants/novel";

export default function NovelForm() {
  const {
    control,
    handleSubmit,
  } = useForm<NovelSchema>({
    defaultValues: initialFormValues,
    resolver: zodResolver(novelSchema),
    mode: "onTouched",
  });

  // React.useEffect(() => {
  //   // works
  //   const { unsubscribe } = watch((value) => {
  //     console.log(value);
  //   });
  //   return () => unsubscribe();
  // }, [watch]);

  const onSubmit = (data: NovelSchema) => {
    console.log("onSubmit", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="title" type="text" label="Title" />
      <Input
        control={control}
        name="description"
        type="text"
        label="Description"
      />
      <Input control={control} name="author" type="text" label="Author" />
      <Select
        items={novelLanguages}
        control={control}
        name="lang"
        label="Language"
      />
      <Select
        items={novelStatuses}
        control={control}
        name="status"
        label="Status"
      />
      <Input control={control} name="coverUrl" type="file" label="Cover URL" />
      <Input control={control} name="rating" label="Rating" type="number" min={0} max={5} isClearable={false} />
      <Input
        control={control}
        name="translatedNovelUrl"
        label="Translated Novel URL"
        placeholder="https://novelupdates.com"
        type="url"
      />
      <Input
        control={control}
        name="rawNovelUrl"
        label="Raw Novel URL"
        placeholder="https://m.qidian.com"
        type="url"
      />
      <Input
        control={control}
        name="reviewsUrl"
        label="Reviews URL"
        placeholder="https://www.goodreads.com"
        type="url"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
