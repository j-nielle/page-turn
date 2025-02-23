import { NovelLanguage, NovelStatus } from "@/lib/constants/novel";
import { NovelSchema } from "@/lib/validators/novel";

export type Novel = NovelSchema & {
	id: number;
};

export const initialFormValues: NovelSchema = {
	title: "",
	description: "",
	author: "",
	lang: NovelLanguage.Chinese,
	status: NovelStatus.Ongoing,
	coverUrl: "",
	rating: 0,
	translatedNovelUrl: "",
	rawNovelUrl: "",
	reviewsUrl: "",
}