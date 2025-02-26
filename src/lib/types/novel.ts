import { NovelLanguage, NovelStatus } from "@/lib/constants/novel";
import { NovelSchema } from "@/lib/validators/novel";

export type Novel = NovelSchema & {
	id: number;
};

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