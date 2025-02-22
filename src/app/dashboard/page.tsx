import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>list of chapters in this novel</div>
      <p>modal for adding a new novel</p>
      <Link
        href="/dashboard/1/add-chapter"
        className="text-blue-500 hover:underline">
        Add Chapter to Novel ID: 1
      </Link>
    </>
  );
}
