import { NovelLanguage, NovelStatus } from "@/lib/constants/novel";
import { NovelSchema } from "@/lib/validators/novel";

export type Novel = NovelSchema & {
	id: number;
};

export type ViewTypes = 'list-view' | 'grid-view';

export type DevPicks = Omit<Novel, "coverUrl"> & { coverUrl: string };

export const initialFormValues: NovelSchema = {
	title: "",
	description: "",
	author: "",
	lang: NovelLanguage.Chinese,
	status: NovelStatus.Ongoing,
	coverUrl: new File([], ""),
	translatedBy: "",
	rating: 0,
	translatedNovelUrl: "",
	rawNovelUrl: "",
	reviewsUrl: "",
}

export type NovelDescriptionClasses = {
	baseClass?: string;
	expandedClass?: string;
	collapsedClass?: string;
}