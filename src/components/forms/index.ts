import dynamic from 'next/dynamic';

export const NovelForm = dynamic(() => import('./NovelForm'), {
	ssr: false,
});