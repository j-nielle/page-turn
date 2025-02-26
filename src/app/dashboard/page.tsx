import React from "react";
import Link from "next/link";
import AddNovel from '@/components/dashboard/AddNovel';

export default function Page() {
  return (
    <div>
      <div>list of chapters in this novel</div>
      <div className="px-4 py-2 w-full border-2 border-default-200">
      <AddNovel />
      </div>
      <Link
        href="/dashboard/1/add-chapter"
        className="text-blue-500 hover:underline">
        Add Chapter to Novel ID: 1
      </Link>
    </div>
  );
}
