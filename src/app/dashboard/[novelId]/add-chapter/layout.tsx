import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Chapter",
  description: "New Chapter",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
