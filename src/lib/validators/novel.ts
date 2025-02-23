import { z } from "zod";
import { NovelStatus, NovelLanguage } from "@/lib/constants/novel";

export const novelSchema = z.object({
	title: z.string().min(3, { message: "Minimum 3 characters" }),
	description: z.string(),
	author: z.string(),
	lang: z.nativeEnum(NovelLanguage),
	status: z.nativeEnum(NovelStatus),
	coverUrl: z.string().url({ message: "Invalid url" }),
	rating: z.number().max(5, { message: "Maximum star rating is 5" }),
	translatedNovelUrl: z.string().url(),
	rawNovelUrl: z.string().url().optional(),
	reviewsUrl: z.string().url().optional(),
});

export type NovelSchema = z.infer<typeof novelSchema>;