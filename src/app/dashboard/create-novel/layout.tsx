import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Novel",
  description: "New Novel",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
