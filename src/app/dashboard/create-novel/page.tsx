import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>form and save button. after save, redirect to /my-novels/id</div>
      <Link
        href="/my-novels/1"
        className="[&.active]:font-semibold text-black bg-white px-2 rounded py-1 uppercase">
        Save novel
      </Link>
    </>
  );
}
