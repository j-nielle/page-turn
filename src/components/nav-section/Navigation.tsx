import Link from "next/link";
import React from "react";

export default function Navigation() {
  return (
    <>
      <nav className="px-5 mobile-l:px-10 py-3.5 h-full bg-indigo-600">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-white">
            bookish.
          </Link>
          <div className="flex space-x-5 items-center justify-end">
            <Link
              href="/dashboard/editor"
              className="[&.active]:font-semibold text-black bg-white px-2 rounded py-1 uppercase">
              Create
            </Link>
            <Link href="/login" className="[&.active]:font-semibold text-white">
              Login
            </Link>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
}
