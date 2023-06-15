import type { Participant, ParticipantGroups } from '$lib/types';

const participants: {
	[key in ParticipantGroups]: Participant[];
} = {
	'automation-tech': [
		{ name: 'Jakub Bazan', image: '/images/people/automation-tech/4.webp', class: '3a' },
		{ name: 'Mateusz Draus', image: '/images/people/automation-tech/3.webp', class: '4as' },
		{ name: 'Jakub Kliś', image: '/images/people/automation-tech/1.webp', class: '4as' },
		{ name: 'Kacper Suski', image: '/images/people/automation-tech/2.webp', class: '3a' }
	],
	'electronic-tech': [
		{ name: 'Konrad Antosz', image: '/images/people/electronic-tech/5.webp', class: '4cs' },
		{ name: 'Kacper Krząstek', image: '/images/people/electronic-tech/6.webp', class: '3d' },
		{
			name: 'Maksymilian Pasichniuk',
			image: '/images/people/electronic-tech/2.webp',
			class: '3c'
		},
		{ name: 'Miłosz Pulit', image: '/images/people/electronic-tech/1.webp', class: '4cs' },
		{ name: 'Jakub Szafran', image: '/images/people/electronic-tech/3.webp', class: '3c' },
		{ name: 'Radosław Szawara', image: '/images/people/electronic-tech/4.webp', class: '4cs' }
	],
	'it-tech': [
		{ name: 'Krystian Gubernat', image: '/images/people/it/7.webp', class: '3g' },
		{ name: 'Tobiasz Kmiotek', image: '/images/people/it/1.webp', class: '4hs' },
		{ name: 'Antoni Kłusek', image: '/images/people/it/12.webp', class: '3h' },
		{ name: 'Paweł Lidwin', image: '/images/people/it/3.webp', class: '4hs' },
		{ name: 'Szymon Madycki', image: '/images/people/it/4.webp', class: '3i' },
		{ name: 'Mateusz Nieroda', image: '/images/people/it/2.webp', class: '4hs' },
		{ name: 'Jan Paśko', image: '/images/people/it/9.webp', class: '3j' },
		{ name: 'Adrian Stawarz', image: '/images/people/it/8.webp', class: '3i' },
		{ name: 'Dawid Świerk', image: '/images/people/it/11.webp', class: '3i' },
		{ name: 'Aleksandra Świgoń', image: '/images/people/it/6.webp', class: '3i' },
		{ name: 'Michał Tadla', image: '/images/people/it/5.webp', class: '4gs' },
		{ name: 'Jacek Zimirowicz', image: '/images/people/it/10.webp', class: '4gs' }
	],
	tutors: [
		{
			name: 'mgr Beata Bieńko',
			image: '/images/people/tutors/3.webp'
		},
		{
			name: 'mgr Elżbieta Czech',
			image: '/images/people/tutors/5.webp'
		},
		{
			name: 'mgr inż. Robert Kasza',
			image: '/images/people/tutors/2.webp'
		},
		{
			name: 'mgr inż. Zbigniew Niedbała',
			image: '/images/people/tutors/1.webp'
		},
		{
			name: 'mgr Grzegorz Wójcik',
			image: '/images/people/tutors/4.webp'
		}
	]
};

export default participants;
