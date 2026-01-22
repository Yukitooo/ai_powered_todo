<script lang="ts">
	import { taskStore } from '$lib/states/states.subtasks.svelte';

	let inputTask = '';

	async function handleBreakdown() {
		const response = await fetch('/api/breakdown', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				task: inputTask
			})
		});

		if (!response.ok) {
			throw new Error('Request failed');
		}
		const { subtasks } = await response.json();

		console.log(1111111, subtasks);

		const newTasks = subtasks.map((content: string) => ({
			id: crypto.randomUUID(),
			task: content,
			isChecked: false
		}));

		taskStore.setTask(newTasks);
	}
</script>

<div class="flex gap-3">
	<input
		type="text"
		placeholder="Explain your task..."
		class="flex-1 rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-zinc-100 transition-colors placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none"
		bind:value={inputTask}
	/>
	<button
		class="cursor-pointer rounded-lg bg-zinc-700 px-6 py-3 font-semibold text-zinc-100 transition-colors hover:bg-zinc-600
        "
		onclick={handleBreakdown}
	>
		Create Task
	</button>
</div>
