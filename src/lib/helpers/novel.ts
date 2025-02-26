import { cn } from "@/lib/utils";
import { NovelDescriptionClasses as Classes } from "../types/novel";

export const parseTitle = (title: string) => {
	if (title.includes(' ')) {
		title.replace(' ', '+')
	}
	return title;
}

export const getDescriptionClass = (
	isExpanded: boolean,
	classes: Classes
) =>
	cn(
		"text-white/80 transition-transform duration-300 ease-in",
		{
			[`line-clamp-none ${classes.expandedClass}`]: isExpanded,
			[`text-ellipsis line-clamp-5 ${classes.collapsedClass} overflow-hidden`]: !isExpanded,
		},
		classes.baseClass
	);
