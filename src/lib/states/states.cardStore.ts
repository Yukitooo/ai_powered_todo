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
	}
]);
