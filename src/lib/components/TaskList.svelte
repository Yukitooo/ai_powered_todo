<script lang="ts">
	import { taskStore } from '$lib/states/states.subtasks.svelte';
	import TaskItem from './TaskItem.svelte';
	import TaskProgress from './TaskProgress.svelte';
	import ActionButtons from './TaskActionButtons.svelte';

	let doneCount = $state(0);
	let totalCount = $state(0);

	$effect(() => {
		doneCount = taskStore.tasks.filter((t) => t.isChecked === true).length;
		totalCount = taskStore.tasks.length;
	});
</script>

<div class="rounded-lg border border-zinc-700 bg-zinc-800 p-6">
	<div class="divide-y divide-zinc-700">
		{#if taskStore.tasks.length === 0}
			<p class="py-8 text-center text-zinc-400">Please input your main task</p>
		{:else}
			{#each taskStore.tasks as t, index}
				<TaskItem task={t} {index} />
			{/each}
		{/if}
	</div>
	{#if taskStore.tasks.length > 0}
		<TaskProgress {doneCount} {totalCount} />
	{/if}
</div>

<div class="max-w-sm">
	<ActionButtons />
</div>
