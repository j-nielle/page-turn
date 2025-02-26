import React from 'react'
import { LayoutList, LayoutGrid } from "lucide-react"
import {
	ToggleGroup,
	ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { ViewTypes } from '@/lib/types/novel';
import { cn } from '@/lib/utils';

type ToggleListViewProps = {
	view?: ViewTypes;
	className?: string;
	onViewChange?: ((view: ViewTypes) => void);
}

export function ToggleListView({
	view,
	className,
	onViewChange,
}: ToggleListViewProps) {
	const handleValueChange = (newValue: string) => {
		if (newValue === 'list-view' || newValue === 'grid-view') {
			onViewChange?.(newValue);
		}
	}
	return (
		<ToggleGroup 
			value={view}
			type="single"
			variant="outline"
			className={cn(className)} 
			defaultValue='list-view'
			onValueChange={handleValueChange}
			>
			<ToggleGroupItem value="list-view" aria-label='List View'>
				<LayoutList className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="grid-view" aria-label='Grid View'>
				<LayoutGrid className="h-4 w-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	)
}