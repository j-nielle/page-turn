import React from "react";
import Link from "next/link";
import AddNovel from "@/components/dashboard/AddNovel";
import { NovelList } from "@/components/novel";

export default function Page() {
  return (
    <div>
      <section className="grid grid-cols-6 grid-rows-4 gap-x-4">
        <NovelList className="row-span-4 col-span-5" />
        <AddNovel className="col-span-1 row-span-4" />
      </section>
      <Link
        href="/dashboard/1/add-chapter"
        className="text-blue-500 hover:underline">
        Add Chapter to Novel ID: 1
      </Link>
    </div>
  );
}
