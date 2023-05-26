import type { Image } from '$lib/types';

const inCompanies: { [key: string]: { title: string; images: Image[]; paragraphs?: string[] } } = {
	'baukunst:': {
		title: 'baukunst',
		images: [
			{
				thumbnail:
					'/images/in-companies/baukunst/thumbnails/6_Baukunst_Klusek_Antoni_praktyki.webp',
				width: 1600,
				height: 902,
				original: '/images/in-companies/baukunst/original/6_Baukunst_Klusek_Antoni_praktyki.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/baukunst/thumbnails/1_Baukunst_Klusek_Antoni_praktyki.webp',
				width: 1600,
				height: 1200,
				original: '/images/in-companies/baukunst/original/1_Baukunst_Klusek_Antoni_praktyki.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/baukunst/thumbnails/11_Baukunst_Klusek_Antoni_praktyki.webp',
				width: 1600,
				height: 902,
				original: '/images/in-companies/baukunst/original/11_Baukunst_Klusek_Antoni_praktyki.jpg'
			},
			{
				thumbnail: '/images/in-companies/baukunst/thumbnails/IMG20230502094505_BURST018.webp',
				width: 2560,
				height: 4538,
				original: '/images/in-companies/baukunst/original/IMG20230502094505_BURST018.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/baukunst/thumbnails/Stawarz_Adrian_Baukunst_praca_nad_strona_1.webp',
				width: 902,
				height: 1600,
				original:
					'/images/in-companies/baukunst/original/Stawarz_Adrian_Baukunst_praca_nad_strona_1.jpeg'
			}
		]
	},
	esmovia: {
		title: 'esmovia',
		images: [
			{
				thumbnail: '/images/in-companies/esmovia/thumbnails/PXL_20230426_074334352.webp',
				width: 2560,
				height: 3400,
				original: '/images/in-companies/esmovia/original/PXL_20230426_074334352.jpg'
			},
			{
				thumbnail: '/images/in-companies/esmovia/thumbnails/PXL_20230426_074259197.webp',
				width: 2560,
				height: 3400,
				original: '/images/in-companies/esmovia/original/PXL_20230426_074259197.jpg'
			},
			{
				thumbnail: '/images/in-companies/esmovia/thumbnails/PXL_20230426_074415497.webp',
				width: 2560,
				height: 3400,
				original: '/images/in-companies/esmovia/original/PXL_20230426_074415497.jpg'
			},
			{
				thumbnail: '/images/in-companies/esmovia/thumbnails/PXL_20230504_074504743.webp',
				width: 2560,
				height: 3400,
				original: '/images/in-companies/esmovia/original/PXL_20230504_074504743.jpg'
			}
		]
	},
	goblue: {
		title: 'goblue',
		images: [
			{
				thumbnail:
					'/images/in-companies/goblue/thumbnails/2Szawara_Radoslaw_goblue_naprawa_ukladu_elektronicznego.webp',
				width: 2560,
				height: 1441,
				original:
					'/images/in-companies/goblue/original/2Szawara_Radoslaw_goblue_naprawa_ukladu_elektronicznego.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/goblue/thumbnails/3Szawara_Radoslaw_goblue_otwieranie_ukladu.webp',
				width: 2560,
				height: 1439,
				original:
					'/images/in-companies/goblue/original/3Szawara_Radoslaw_goblue_otwieranie_ukladu.jpg'
			}
		]
	},
	'ies-districte-maritim': {
		title: 'ies-districte-maritim',
		images: [
			{
				thumbnail: '/images/in-companies/ies districte maritim/thumbnails/IMG_20230420_130626.webp',
				width: 2560,
				height: 1440,
				original: '/images/in-companies/ies districte maritim/original/IMG_20230420_130626.jpg'
			},
			{
				thumbnail: '/images/in-companies/ies districte maritim/thumbnails/IMG_20230420_105234.webp',
				width: 2560,
				height: 1151,
				original: '/images/in-companies/ies districte maritim/original/IMG_20230420_105234.jpg'
			}
		]
	},
	industa: {
		title: 'industa',
		images: [
			{
				thumbnail:
					'/images/in-companies/industa/thumbnails/Bazan_Jakub_Industa_Odbior_materialow.webp',
				width: 2000,
				height: 1500,
				original: '/images/in-companies/industa/original/Bazan_Jakub_Industa_Odbior_materialow.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/industa/thumbnails/Bazan_Jakub_Industa_Transport_materialow.webp',
				width: 2000,
				height: 1500,
				original:
					'/images/in-companies/industa/original/Bazan_Jakub_Industa_Transport_materialow.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/industa/thumbnails/Suski_Kacper_Industa_przeszukowanie_planow.webp',
				width: 1368,
				height: 1824,
				original:
					'/images/in-companies/industa/original/Suski_Kacper_Industa_przeszukowanie_planow.jpg'
			},
			{
				thumbnail: '/images/in-companies/industa/thumbnails/Suski_Kacper_Industa_paletyzacja.webp',
				width: 1368,
				height: 1824,
				original: '/images/in-companies/industa/original/Suski_Kacper_Industa_paletyzacja.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/industa/thumbnails/Suski_Kacper_Industa_przenoszenie_cylindra.webp',
				width: 1368,
				height: 1824,
				original:
					'/images/in-companies/industa/original/Suski_Kacper_Industa_przenoszenie_cylindra.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/industa/thumbnails/Bazan_Jakub_Industa_Analiza_schematow.webp',
				width: 2000,
				height: 1500,
				original: '/images/in-companies/industa/original/Bazan_Jakub_Industa_Analiza_schematow.jpg'
			}
		]
	},
	instituto: {
		title: 'instituto',
		images: [
			{
				thumbnail: '/images/in-companies/instituto/thumbnails/IMG-20230425-WA0000.webp',
				width: 1491,
				height: 1600,
				original: '/images/in-companies/instituto/original/IMG-20230425-WA0000.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/instituto/thumbnails/Swierk_Dawid_Instituto_Inter_testowanie_komputera.webp',
				width: 2560,
				height: 1440,
				original:
					'/images/in-companies/instituto/original/Swierk_Dawid_Instituto_Inter_testowanie_komputera.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/instituto/thumbnails/Swierk_Dawid_Instituto_Inter_tlumaczacy_opiekun.webp',
				width: 2560,
				height: 1440,
				original:
					'/images/in-companies/instituto/original/Swierk_Dawid_Instituto_Inter_tlumaczacy_opiekun.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/instituto/thumbnails/Swierk_Dawid_Instituto_Inter_z_opiekunem_z_prezentem.webp',
				width: 2560,
				height: 3400,
				original:
					'/images/in-companies/instituto/original/Swierk_Dawid_Instituto_Inter_z_opiekunem_z_prezentem.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/instituto/thumbnails/Swigon_Aleksandra_Instituto_Inter_diagnostyka_komputera_1.webp',
				width: 2560,
				height: 1927,
				original:
					'/images/in-companies/instituto/original/Swigon_Aleksandra_Instituto_Inter_diagnostyka_komputera_1.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/instituto/thumbnails/Swigon_Aleksandra_Instituto_Inter_diagnostyka_komputera_2.webp',
				width: 2560,
				height: 1927,
				original:
					'/images/in-companies/instituto/original/Swigon_Aleksandra_Instituto_Inter_diagnostyka_komputera_2.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/instituto/thumbnails/Swigon_Aleksandra_Instituto_Inter_sprawdzanie_laptop\u00f3w_5.webp',
				width: 2560,
				height: 1920,
				original:
					'/images/in-companies/instituto/original/Swigon_Aleksandra_Instituto_Inter_sprawdzanie_laptop\u00f3w_5.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/instituto/thumbnails/Swigon_Aleksandra_Instituto_Inter_wpisywanie_polecenia_4.webp',
				width: 2560,
				height: 1927,
				original:
					'/images/in-companies/instituto/original/Swigon_Aleksandra_Instituto_Inter_wpisywanie_polecenia_4.jpg'
			}
		]
	},
	'md-equipos': {
		title: 'md-equipos',
		images: [
			{
				thumbnail:
					'/images/in-companies/md equipos/thumbnails/Antosz_Konrad_MD Equipos Technologicos_z_tutorem.webp',
				width: 2560,
				height: 3413,
				original:
					'/images/in-companies/md equipos/original/Antosz_Konrad_MD Equipos Technologicos_z_tutorem.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/md equipos/thumbnails/Antosz_Konrad_MD Equipos Technologicos_przycinanie_szyny.webp',
				width: 1536,
				height: 2048,
				original:
					'/images/in-companies/md equipos/original/Antosz_Konrad_MD Equipos Technologicos_przycinanie_szyny.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/md equipos/thumbnails/usuwanie lakieru elektroizolacyjnego.webp',
				width: 1536,
				height: 2048,
				original:
					'/images/in-companies/md equipos/original/usuwanie lakieru elektroizolacyjnego.jpeg'
			},
			{
				thumbnail:
					'/images/in-companies/md equipos/thumbnails/Antosz_Konrad_MD Equipos Technologicos_przykecanie_przewodow.webp',
				width: 1536,
				height: 2048,
				original:
					'/images/in-companies/md equipos/original/Antosz_Konrad_MD Equipos Technologicos_przykecanie_przewodow.jpg'
			},
			{
				thumbnail:
					'/images/in-companies/md equipos/thumbnails/Antosz_Konrad_MD Equipos Technologicos_sciaganie_izolacji_2.webp',
				width: 1536,
				height: 2048,
				original:
					'/images/in-companies/md equipos/original/Antosz_Konrad_MD Equipos Technologicos_sciaganie_izolacji_2.jpg'
			},
			{
				thumbnail: '/images/in-companies/md equipos/thumbnails/ciecie _przewodow.webp',
				width: 1536,
				height: 2048,
				original: '/images/in-companies/md equipos/original/ciecie _przewodow.jpeg'
			},
			{
				thumbnail: '/images/in-companies/md equipos/thumbnails/pomiary mutlimetr.webp',
				width: 1536,
				height: 2048,
				original: '/images/in-companies/md equipos/original/pomiary mutlimetr.jpeg'
			},
			{
				thumbnail: '/images/in-companies/md equipos/thumbnails/zakladanie oslonki.webp',
				width: 1301,
				height: 1734,
				original: '/images/in-companies/md equipos/original/zakladanie oslonki.jpeg'
			}
		]
	},
	microarea: {
		title: 'microarea',
		images: [
			{
				thumbnail: '/images/in-companies/microarea/thumbnails/7.webp',
				width: 2560,
				height: 1920,
				original: '/images/in-companies/microarea/original/7.jpg'
			},
			{
				thumbnail: '/images/in-companies/microarea/thumbnails/1.webp',
				width: 2560,
				height: 1920,
				original: '/images/in-companies/microarea/original/1.jpg'
			},
			{
				thumbnail: '/images/in-companies/microarea/thumbnails/2.webp',
				width: 2560,
				height: 1920,
				original: '/images/in-companies/microarea/original/2.jpg'
			},
			{
				thumbnail: '/images/in-companies/microarea/thumbnails/3.webp',
				width: 2560,
				height: 1920,
				original: '/images/in-companies/microarea/original/3.jpg'
			},
			{
				thumbnail: '/images/in-companies/microarea/thumbnails/4.webp',
				width: 2560,
				height: 1920,
				original: '/images/in-companies/microarea/original/4.jpg'
			},
			{
				thumbnail: '/images/in-companies/microarea/thumbnails/6.webp',
				width: 2560,
				height: 1920,
				original: '/images/in-companies/microarea/original/6.jpg'
			}
		]
	},
	nadunet: {
		title: 'nadunet',
		images: [
			{
				thumbnail: '/images/in-companies/nadunet/thumbnails/20230425_141940.webp',
				width: 2560,
				height: 3413,
				original: '/images/in-companies/nadunet/original/20230425_141940.jpg'
			},
			{
				thumbnail: '/images/in-companies/nadunet/thumbnails/IMG_20230504_093823.webp',
				width: 2560,
				height: 1920,
				original: '/images/in-companies/nadunet/original/IMG_20230504_093823.jpg'
			},
			{
				thumbnail: '/images/in-companies/nadunet/thumbnails/received_765756991819256.webp',
				width: 1512,
				height: 2016,
				original: '/images/in-companies/nadunet/original/received_765756991819256.jpeg'
			}
		]
	},
	ommvi: {
		title: 'ommvi',
		images: [
			{
				thumbnail: '/images/in-companies/ommvi/thumbnails/20230504_133858.webp',
				width: 2560,
				height: 3413,
				original: '/images/in-companies/ommvi/original/20230504_133858.jpg'
			},
			{
				thumbnail: '/images/in-companies/ommvi/thumbnails/20230426_102040.webp',
				width: 2560,
				height: 1920,
				original: '/images/in-companies/ommvi/original/20230426_102040.jpg'
			},
			{
				thumbnail: '/images/in-companies/ommvi/thumbnails/20230428_112728.webp',
				width: 2448,
				height: 3264,
				original: '/images/in-companies/ommvi/original/20230428_112728.jpg'
			}
		]
	},
	relms: {
		title: 'relms',
		images: [
			{
				thumbnail: '/images/in-companies/relms/thumbnails/inbound949260648464710811.webp',
				width: 1500,
				height: 2000,
				original: '/images/in-companies/relms/original/inbound949260648464710811.jpg'
			},
			{
				thumbnail: '/images/in-companies/relms/thumbnails/inbound1722289601022596281.webp',
				width: 1500,
				height: 2000,
				original: '/images/in-companies/relms/original/inbound1722289601022596281.jpg'
			},
			{
				thumbnail: '/images/in-companies/relms/thumbnails/inbound2120251890321074534.webp',
				width: 2560,
				height: 3413,
				original: '/images/in-companies/relms/original/inbound2120251890321074534.jpg'
			},
			{
				thumbnail: '/images/in-companies/relms/thumbnails/inbound2297487967974672494.webp',
				width: 1500,
				height: 2000,
				original: '/images/in-companies/relms/original/inbound2297487967974672494.jpg'
			},
			{
				thumbnail: '/images/in-companies/relms/thumbnails/inbound2625921871488657949.webp',
				width: 1536,
				height: 2048,
				original: '/images/in-companies/relms/original/inbound2625921871488657949.jpg'
			},
			{
				thumbnail: '/images/in-companies/relms/thumbnails/inbound3985874552679934080.webp',
				width: 2560,
				height: 3413,
				original: '/images/in-companies/relms/original/inbound3985874552679934080.jpg'
			},
			{
				thumbnail: '/images/in-companies/relms/thumbnails/inbound5420604413426567139.webp',
				width: 1536,
				height: 2048,
				original: '/images/in-companies/relms/original/inbound5420604413426567139.jpg'
			},
			{
				thumbnail: '/images/in-companies/relms/thumbnails/inbound7338352847673518646.webp',
				width: 1500,
				height: 2000,
				original: '/images/in-companies/relms/original/inbound7338352847673518646.jpg'
			}
		]
	},
	seymeval: {
		title: 'seymeval',
		images: [
			{
				thumbnail: '/images/in-companies/seymeval/thumbnails/20230420_123032.webp',
				width: 2560,
				height: 1920,
				original: '/images/in-companies/seymeval/original/20230420_123032.jpg'
			},
			{
				thumbnail: '/images/in-companies/seymeval/thumbnails/1.webp',
				width: 2560,
				height: 1920,
				original: '/images/in-companies/seymeval/original/1.jpg'
			},
			{
				thumbnail: '/images/in-companies/seymeval/thumbnails/3.webp',
				width: 2000,
				height: 1125,
				original: '/images/in-companies/seymeval/original/3.jpeg'
			}
		]
	}
};
export default inCompanies;
