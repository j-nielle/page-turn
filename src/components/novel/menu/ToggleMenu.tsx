import React from 'react'
import { LayoutList, LayoutGrid } from "lucide-react"
import {
	ToggleGroup,
	ToggleGroupItem,
} from "@/components/ui/toggle-group"

export function ToggleMenu() {
	return (
		<ToggleGroup variant="outline" type="single" onValueChange={(val) => console.log(val)}>
			<ToggleGroupItem value="list-view" aria-label="List View">
				<LayoutList className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="grid-view" aria-label="Grid View">
				<LayoutGrid className="h-4 w-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	)
}