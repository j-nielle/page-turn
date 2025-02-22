export interface Novel {
	id: number;
  title: string;
  description: string;
	author: string;
	lang?: string;
	status: 'completed' | 'ongoing' | 'dropped';
	coverUrl: string;
	rating: number;
	links: {
		novelUpdatesUrl: string;
		reviewsUrl: string;
	}
}