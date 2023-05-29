import type { Image } from '$lib/types';

const preparations: {
	[key: string]: {
		title: string;
		images: Image[];
		paragraphs?: string[];
	};
} = {
	english: {
		title: 'english',
		images: [
			{
				thumbnail: '/images/preparations/english/thumbnails/kurs_j_ang_w_ZSE_20230131_1.webp',
				width: 2560,
				height: 1920,
				original: '/images/preparations/english/original/kurs_j_ang_w_ZSE_20230131_1.jpg'
			},
			{
				thumbnail: '/images/preparations/english/thumbnails/kurs_j_ang_w_ZSE_20230207.webp',
				width: 2560,
				height: 1920,
				original: '/images/preparations/english/original/kurs_j_ang_w_ZSE_20230207.jpg'
			}
		],
		paragraphs: ['p1', 'p2', 'p3']
	},
	spanish: {
		title: 'spanish',
		images: [
			{
				thumbnail: '/images/preparations/spanish/thumbnails/kurs_j_hisz_w_ZSE_20230320.webp',
				width: 2560,
				height: 1920,
				original: '/images/preparations/spanish/original/kurs_j_hisz_w_ZSE_20230320.jpg'
			},
			{
				thumbnail: '/images/preparations/spanish/thumbnails/kurs_j_hiszpanskiego_3.webp',
				width: 2560,
				height: 1706,
				original: '/images/preparations/spanish/original/kurs_j_hiszpanskiego_3.JPG'
			},
			{
				thumbnail: '/images/preparations/spanish/thumbnails/kurs_j_hiszpanskiego_4.webp',
				width: 2560,
				height: 1706,
				original: '/images/preparations/spanish/original/kurs_j_hiszpanskiego_4.JPG'
			},
			{
				thumbnail: '/images/preparations/spanish/thumbnails/kurs_j_hiszpanskiego_5.webp',
				width: 2560,
				height: 1706,
				original: '/images/preparations/spanish/original/kurs_j_hiszpanskiego_5.JPG'
			}
		],
		paragraphs: ['p1', 'p2']
	},
	'organizational-meeting': {
		title: 'organizational-meeting',
		images: [
			{
				thumbnail:
					'/images/preparations/organizational meeting/thumbnails/spotkanie_organizacyjne_w_ZSE_5.webp',
				width: 2560,
				height: 1706,
				original:
					'/images/preparations/organizational meeting/original/spotkanie_organizacyjne_w_ZSE_5.JPG'
			},
			{
				thumbnail:
					'/images/preparations/organizational meeting/thumbnails/spotkanie_organizacyjne_w_ZSE_7.webp',
				width: 2560,
				height: 1706,
				original:
					'/images/preparations/organizational meeting/original/spotkanie_organizacyjne_w_ZSE_7.JPG'
			},
			{
				thumbnail:
					'/images/preparations/organizational meeting/thumbnails/spotkanie_organizacyjne_w_ZSE_20230228.webp',
				width: 2560,
				height: 1920,
				original:
					'/images/preparations/organizational meeting/original/spotkanie_organizacyjne_w_ZSE_20230228.jpg'
			},
			{
				thumbnail:
					'/images/preparations/organizational meeting/thumbnails/spotkanie_organizacyjne_w_ZSE_20230404.webp',
				width: 2560,
				height: 1920,
				original:
					'/images/preparations/organizational meeting/original/spotkanie_organizacyjne_w_ZSE_20230404.jpg'
			},
			{
				thumbnail:
					'/images/preparations/organizational meeting/thumbnails/spotkanie_organizacyjne_w_ZSE_2.webp',
				width: 2560,
				height: 1706,
				original:
					'/images/preparations/organizational meeting/original/spotkanie_organizacyjne_w_ZSE_2.JPG'
			}
		],
		paragraphs: ['p1', 'p2']
	},
	'esmovia-preparations': {
		title: 'esmovia-preparations',
		images: [
			{
				thumbnail: '/images/cultural/3pierwszespotkanie/thumbnails/2.webp',
				width: 2560,
				height: 1920,
				original: '/images/cultural/3pierwszespotkanie/original/2.jpg'
			},
			{
				thumbnail: '/images/cultural/3pierwszespotkanie/thumbnails/4.webp',
				width: 2560,
				height: 1920,
				original: '/images/cultural/3pierwszespotkanie/original/4.jpg'
			},
			{
				thumbnail: '/images/cultural/3pierwszespotkanie/thumbnails/5.webp',
				width: 2560,
				height: 1920,
				original: '/images/cultural/3pierwszespotkanie/original/5.jpg'
			},
			{
				thumbnail: '/images/cultural/4hiszpanski/thumbnails/IMG20230418143628.webp',
				width: 2560,
				height: 1927,
				original: '/images/cultural/4hiszpanski/original/IMG20230418143628.jpg'
			},
			{
				thumbnail: '/images/cultural/3pierwszespotkanie/thumbnails/1683249034561.webp',
				width: 2560,
				height: 1920,
				original: '/images/cultural/3pierwszespotkanie/original/1683249034561.jpg'
			},
			{
				thumbnail: '/images/cultural/4hiszpanski/thumbnails/1683249094476.webp',
				width: 2560,
				height: 1920,
				original: '/images/cultural/4hiszpanski/original/1683249094476.jpg'
			},
			{
				thumbnail: '/images/cultural/4hiszpanski/thumbnails/1683249094505.webp',
				width: 2560,
				height: 1920,
				original: '/images/cultural/4hiszpanski/original/1683249094505.jpg'
			},
			{
				thumbnail: '/images/cultural/4hiszpanski/thumbnails/IMG20230418150655.webp',
				width: 2560,
				height: 1927,
				original: '/images/cultural/4hiszpanski/original/IMG20230418150655.jpg'
			}
		],
		paragraphs: ['p1', 'p2']
	}
};

export default preparations;
