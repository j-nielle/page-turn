"use client";
import { Analytics } from "@vercel/analytics/react";
import { HeroUIProvider } from "@heroui/react";
import Header from "./Header";
import Footer from "./Footer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Analytics />
      <HeroUIProvider>
        <Header />
        <main className="flex flex-col p-5 md:px-10 md:py-5 min-h-screen">
          {children}
        </main>
        <Footer />
      </HeroUIProvider>
    </>
  );
}
