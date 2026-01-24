export interface Tasks {
	id: number;
	task: string;
	isChecked: boolean;
}

export interface TaskCard {
	id: number;
	title: string;
	description: string;
	task: Tasks[];
}
