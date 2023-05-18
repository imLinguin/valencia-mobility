export interface Image {
	thumbnail: string;
	width: number;
	height: number;
	original: string;
}

export type ParticipantGroups = 'automation-tech' | 'electronic-tech' | 'it-tech' | 'tutors';
export interface Participant {
	name: string;
	image?: string;
	class?: string;
	position?: string;
}
