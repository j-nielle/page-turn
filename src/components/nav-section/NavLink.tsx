"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export interface NavLinksProps {
  to: string;
  linkText: string;
  className?: string;
}

export default function NavLink({ to, linkText, className }: NavLinksProps) {
  const pathname = usePathname();
  const isActive = pathname === to;

  const computedLinkClass = cn("", className, {
    "font-semibold": isActive,
  });

  return (
    <Link href={to} className={computedLinkClass}>
      {linkText}
    </Link>
  );
}
