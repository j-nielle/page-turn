export enum NovelStatus {
	Completed = 'completed',
	Ongoing = 'ongoing',
	Dropped = 'dropped',
}

export enum NovelLanguage {
	English = 'en',
	Chinese = 'cn',
	Korean = 'kr',
}

export const novelLanguages = [
	{key: NovelLanguage.English, label: "English"},
	{key: NovelLanguage.Chinese, label: "Chinese"},
	{key: NovelLanguage.Korean, label: "Korean"},
];
export const novelStatuses = [
	{key: NovelStatus.Completed, label: "Completed"},
	{key: NovelStatus.Ongoing, label: "Ongoing"},
	{key: NovelStatus.Dropped, label: "Dropped"},
];