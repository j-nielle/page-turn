import React from 'react'
import Browse from './Browse'
import Hero from './Hero'

export default function Home() {
	return (
		<div className="flex flex-col gap-4 md:gap-3">
      <Hero />
      <Browse />
    </div>
	)
}
