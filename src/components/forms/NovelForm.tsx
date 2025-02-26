"use client";

import React from "react";
import { Button } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { initialFormValues } from "@/lib/types/novel";
import { novelSchema, type NovelSchema } from "@/lib/validators/novel";
import { novelLanguages, novelStatuses } from "@/lib/constants/novel";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import TextArea from "@/components/forms/TextArea";
import RateStars from "@/components/user-activity/RateStars";

interface NovelFormProps {
  handleClose: () => void;
}

export default function NovelForm({ handleClose }: NovelFormProps) {
  const { control, handleSubmit } = useForm<NovelSchema>({
    defaultValues: initialFormValues,
    resolver: zodResolver(novelSchema),
    mode: "onSubmit",
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
      <div className="grid grid-cols-3 gap-4">
        <Input
          className="col-span-3 sm:col-span-2"
          control={control}
          name="title"
          type="text"
          label="Title"
        />
        <Input
          className="col-span-3 sm:col-span-1"
          control={control}
          name="author"
          type="text"
          label="Author"
        />

        <TextArea
          className="col-span-3"
          control={control}
          name="description"
          type="text"
          label="Description"
        />

        <Select
          className="col-span-3 sm:col-span-1"
          items={novelLanguages}
          control={control}
          name="lang"
          label="Language"
        />
        <Select
          className="col-span-3 sm:col-span-1"
          items={novelStatuses}
          control={control}
          name="status"
          label="Status"
        />
        <div className="input-wrapper col-span-3 sm:col-span-1">
          <p className="input-label">
            Rating:
          </p>
          <RateStars control={control} name="rating" readOnly={false} />
        </div>

        {/* <Input
          className="col-span-3 sm:col-span-1"
          control={control}
          name="translatedBy"
          type="text"
          label="Translated By"
        /> */}

        <Input
          className="col-span-3"
          classNames={{
            innerWrapper: "-ml-1.5",
          }}
          control={control}
          name="coverUrl"
          type="file"
          label="Cover URL"
        />

        <Input
          className="col-span-3 sm:col-span-1"
          control={control}
          name="translatedNovelUrl"
          label="Translated Novel URL"
          placeholder="https://novelupdates.com"
          type="url"
        />
        <Input
          className="col-span-3 sm:col-span-1"
          control={control}
          name="rawNovelUrl"
          label="Raw Novel URL"
          placeholder="https://m.qidian.com"
          type="url"
        />
        <Input
          className="col-span-3 sm:col-span-1"
          control={control}
          name="reviewsUrl"
          label="Reviews URL"
          placeholder="https://www.goodreads.com"
          type="url"
        />
      </div>

      <footer className="flex flex-row gap-2 px-6 py-4 justify-end">
        <Button color="danger" variant="light" onPress={handleClose}>
          Close
        </Button>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </footer>
    </form>
  );
}
