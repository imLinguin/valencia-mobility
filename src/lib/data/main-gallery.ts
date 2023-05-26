import type { Image } from '$lib/types';
import culture from './traineeship/culture';
import preparations from './traineeship/preparations';
import inCompanies from './traineeship/in-companies';

const getImages = (object: {
	[key: string]: {
		title: string;
		images: Image[];
		paragraphs?: string[];
	};
}): Image[] =>
	Object.values(object)
		.map((entry) => entry.images)
		.flat();

const flightTo = [
	{
		thumbnail: '/images/flight/to/thumbnails/Antosz_Konrad_grupa_przed_samolotem.webp',
		width: 2560,
		height: 1920,
		original: '/images/flight/to/original/Antosz_Konrad_grupa_przed_samolotem.jpg'
	},
	{
		thumbnail: '/images/flight/to/thumbnails/samolot_lotnisko_warszawa.webp',
		width: 2560,
		height: 1706,
		original: '/images/flight/to/original/samolot_lotnisko_warszawa.JPG'
	},
	{
		thumbnail: '/images/flight/to/thumbnails/uczniowie_lotnisko_chopin_1.webp',
		width: 2560,
		height: 1920,
		original: '/images/flight/to/original/uczniowie_lotnisko_chopin_1.jpg'
	},
	{
		thumbnail: '/images/flight/to/thumbnails/widok_samolot_mount_blanc_2.webp',
		width: 2560,
		height: 1706,
		original: '/images/flight/to/original/widok_samolot_mount_blanc_2.JPG'
	}
];

const flightFrom = [
	{
		thumbnail: '/images/flight/from/thumbnails/1_grupa_oczekuje_na_walizki.webp',
		width: 2560,
		height: 1920,
		original: '/images/flight/from/original/1_grupa_oczekuje_na_walizki.jpg'
	},
	{
		thumbnail: '/images/flight/from/thumbnails/3_grupa_wchodzi_do_samolotu.webp',
		width: 2560,
		height: 1920,
		original: '/images/flight/from/original/3_grupa_wchodzi_do_samolotu.jpg'
	},
	{
		thumbnail: '/images/flight/from/thumbnails/5_Walencja_port_z_gory.webp',
		width: 2560,
		height: 3413,
		original: '/images/flight/from/original/5_Walencja_port_z_gory.jpg'
	},
	{
		thumbnail: '/images/flight/from/thumbnails/1683564192197.webp',
		width: 2560,
		height: 1920,
		original: '/images/flight/from/original/1683564192197.jpg'
	},
	{
		thumbnail: '/images/flight/from/thumbnails/1683564192221.webp',
		width: 2560,
		height: 1920,
		original: '/images/flight/from/original/1683564192221.jpg'
	},
	{
		thumbnail: '/images/flight/from/thumbnails/1683564192270.webp',
		width: 2560,
		height: 1920,
		original: '/images/flight/from/original/1683564192270.jpg'
	},
	{
		thumbnail: '/images/flight/from/thumbnails/1683564192354.webp',
		width: 2560,
		height: 1920,
		original: '/images/flight/from/original/1683564192354.jpg'
	}
];

const lastMeeting = [
	{
		thumbnail: '/images/cultural/12ostatniespotkanie/thumbnails/1683249034228.webp',
		width: 2560,
		height: 3413,
		original: '/images/cultural/12ostatniespotkanie/original/1683249034228.jpg'
	},
	{
		thumbnail: '/images/cultural/12ostatniespotkanie/thumbnails/1683249034344.webp',
		width: 2560,
		height: 3413,
		original: '/images/cultural/12ostatniespotkanie/original/1683249034344.jpg'
	},
	{
		thumbnail: '/images/cultural/12ostatniespotkanie/thumbnails/1683249034466.webp',
		width: 2560,
		height: 1920,
		original: '/images/cultural/12ostatniespotkanie/original/1683249034466.jpg'
	},
	{
		thumbnail: '/images/cultural/12ostatniespotkanie/thumbnails/1683249034656.webp',
		width: 2560,
		height: 1920,
		original: '/images/cultural/12ostatniespotkanie/original/1683249034656.jpg'
	},
	{
		thumbnail: '/images/cultural/12ostatniespotkanie/thumbnails/1683249034684.webp',
		width: 2560,
		height: 1920,
		original: '/images/cultural/12ostatniespotkanie/original/1683249034684.jpg'
	}
];

const everydayMeetings = [
	{
		thumbnail: '/images/cultural/13spotkania/thumbnails/IMG20230417203415.webp',
		width: 2560,
		height: 1927,
		original: '/images/cultural/13spotkania/original/IMG20230417203415.jpg'
	},
	{
		thumbnail: '/images/cultural/13spotkania/thumbnails/Pulit_Milosz_spotkanie_3.webp',
		width: 2560,
		height: 1920,
		original: '/images/cultural/13spotkania/original/Pulit_Milosz_spotkanie_3.jpg'
	},
	{
		thumbnail: '/images/cultural/13spotkania/thumbnails/Pulit_Milosz_spotkanie_8.webp',
		width: 2560,
		height: 1920,
		original: '/images/cultural/13spotkania/original/Pulit_Milosz_spotkanie_8.jpg'
	},
	{
		thumbnail: '/images/cultural/13spotkania/thumbnails/Pulit_Milosz_spotkanie_5.webp',
		width: 2560,
		height: 1920,
		original: '/images/cultural/13spotkania/original/Pulit_Milosz_spotkanie_5.jpg'
	}
];

const groupPhotos = [
	{
		thumbnail: '/images/cultural/8grupowe/thumbnails/1_automatycy_Kmiotek_Tobiasz.webp',
		width: 2560,
		height: 1927,
		original: '/images/cultural/8grupowe/original/1_automatycy_Kmiotek_Tobiasz.jpg'
	},
	{
		thumbnail: '/images/cultural/8grupowe/thumbnails/1_elektronicy_Kmiotek_Tobiasz.webp',
		width: 2560,
		height: 1927,
		original: '/images/cultural/8grupowe/original/1_elektronicy_Kmiotek_Tobiasz.jpg'
	},
	{
		thumbnail: '/images/cultural/8grupowe/thumbnails/1_informatycy_Kmiotek_Tobiasz.webp',
		width: 2560,
		height: 1927,
		original: '/images/cultural/8grupowe/original/1_informatycy_Kmiotek_Tobiasz.jpg'
	},
	{
		thumbnail: '/images/cultural/8grupowe/thumbnails/1_w_parku_Antosz_Konrad.webp',
		width: 2560,
		height: 1439,
		original: '/images/cultural/8grupowe/original/1_w_parku_Antosz_Konrad.JPG'
	},
	{
		thumbnail: '/images/cultural/8grupowe/thumbnails/2_przed_Valencia_Antosz_Konrad.webp',
		width: 2560,
		height: 1439,
		original: '/images/cultural/8grupowe/original/2_przed_Valencia_Antosz_Konrad.jpg'
	},
	{
		thumbnail: '/images/cultural/8grupowe/thumbnails/3_Antosz_Konrad.webp',
		width: 2560,
		height: 1439,
		original: '/images/cultural/8grupowe/original/3_Antosz_Konrad.jpg'
	},
	{
		thumbnail: '/images/cultural/8grupowe/thumbnails/5_zachod_slonca_Antosz_Konrad.webp',
		width: 2560,
		height: 1920,
		original: '/images/cultural/8grupowe/original/5_zachod_slonca_Antosz_Konrad.jpg'
	}
];

const galleryImages: Image[] = [
	...getImages(preparations),
	...flightTo,
	...getImages(inCompanies),
	...getImages(culture),
	...groupPhotos,
	...everydayMeetings,
	...lastMeeting,
	...flightFrom
];

export default galleryImages;
