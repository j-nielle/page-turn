import React from "react";
import Hero from './Home';
import Browse from './Browse'

export default function Home() {
  return (
    <div className="flex flex-col gap-4 md:gap-3">
      <Hero />
      <Browse />
    </div>
  );
}
