<script>
	import { taskStore } from '$lib/states/states.subtasks.svelte';

	const addedTask = {
		id: crypto.randomUUID(),
		task: 'New Custom Task',
		isChecked: false
	};
</script>

<div class="mt-4 flex gap-3">
	<button
		type="button"
		class="flex-1 cursor-pointer rounded-lg border border-zinc-600 bg-zinc-700 px-4 py-3 font-semibold text-zinc-100 transition-colors hover:bg-zinc-600"
		onclick={() => taskStore.addTask(addedTask)}
	>
		Add Custom Task
	</button>
	<button
		type="button"
		class="flex-1 cursor-pointer rounded-lg border border-green-800 bg-green-900 px-4 py-3 font-semibold text-green-100 transition-colors hover:bg-green-800"
	>
		Finish Agenda
	</button>
</div>
