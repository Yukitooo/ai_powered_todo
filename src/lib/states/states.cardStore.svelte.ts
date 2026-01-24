import type { TaskCard } from '$lib/types';

let taskCard = $state<TaskCard[]>([
	{
		id: 1,
		title: 'How to peel a banana',
		description: 'The best way to peel a banana',
		task: [
			{
				id: 1,
				task: 'Peel a banana the hardest way',
				isChecked: true
			},
			{
				id: 2,
				task: 'Eat the banana',
				isChecked: true
			},
			{
				id: 3,
				task: 'Throw the banana',
				isChecked: true
			}
		]
	},
	{
		id: 2,
		title: 'Grocery run',
		description: 'Quick essentials after work',
		task: [
			{
				id: 1,
				task: 'Buy milk',
				isChecked: false
			},
			{
				id: 2,
				task: 'Pick up eggs',
				isChecked: false
			}
		]
	},
	{
		id: 3,
		title: 'Weekend cleanup',
		description: 'Tidy the apartment',
		task: [
			{
				id: 1,
				task: 'Vacuum living room',
				isChecked: false
			},
			{
				id: 2,
				task: 'Take out trash',
				isChecked: false
			}
		]
	}
]);

export const cardStore = {
	get cards() {
		return taskCard;
	},

	addCard(card: TaskCard) {
		taskCard = [...taskCard, card];
	},

	setCards(cards: TaskCard[]) {
		taskCard = cards;
	}
};
