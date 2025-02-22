import React from 'react'

export default function Footer() {
	return (
		<>
		<hr />
		<div className="px-5 mobile-l:px-10 py-2 h-full bg-muted/40">
				<div className='flex items-center justify-between'>
					<div className="font-bold text-3xl">
						bookish.
					</div>
					<div className="flex space-y-2 items-end justify-end flex-col">
						<p>
							Contact Us
						</p>
						<p>
							Login
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
