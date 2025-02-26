import { cn } from "@/lib/utils";

export const parseTitle = (title: string) => {
	if (title.includes(' ')) {
		title.replace(' ', '+')
	}
	return title;
}

export const getDescriptionClass = (
	isExpanded: boolean,
	className: string = "max-h-52"
) =>
	cn(
		"text-white/80 transition-transform duration-300 ease-in",
		{
			"line-clamp-none": isExpanded,
			[`text-ellipsis line-clamp-5 ${className} overflow-hidden`]: !isExpanded,
		}
	);
