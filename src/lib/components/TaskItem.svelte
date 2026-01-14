<script lang="ts">
	import { taskStore } from '$lib/states/states.subtasks.svelte';
	import type { Tasks } from '$lib/types';

	interface Props {
		task: Tasks;
		index: number;
	}

	let { task, index }: Props = $props();
	let isEditing = $state(false);
	let inputElement: HTMLInputElement;

	$effect(() => {
		if (isEditing && inputElement) {
			inputElement.focus();
			inputElement.select();
		}
	});
</script>

<label class="group flex cursor-pointer items-center gap-3 py-3 transition-colors hover:bg-zinc-700">
	<input
		type="checkbox"
		checked={task.isChecked}
		class="h-5 min-h-5 w-5 min-w-5 cursor-pointer accent-blue-600"
		onclick={() => (task.isChecked = !task.isChecked)}
	/>
	{#if isEditing}
		<input
			bind:this={inputElement}
			type="text"
			value={task.task}
			oninput={(e) => taskStore.editTask(e.currentTarget.value, index)}
			onblur={() => (isEditing = false)}
			class="border-none bg-zinc-700/50 px-2 text-lg text-zinc-100 outline-none"
			style="width: {task.task.length + 2}ch; min-width: 10ch;"
			onclick={(e) => e.stopPropagation()}
		/>
	{:else}
		<span class="text-lg text-zinc-100" onclick={(e) => e.stopPropagation()}>
			{task.task}
		</span>
	{/if}
	<span class="flex-1"></span>
	<button
		class="opacity-0 transition-opacity group-hover:opacity-100"
		onclick={(e) => {
			e.stopPropagation();
			isEditing = true;
		}}
		type="button"
		aria-label="Edit task"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 text-blue-500 hover:text-blue-400"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
			<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
		</svg>
	</button>
	<button
		class="opacity-0 transition-opacity group-hover:opacity-100"
		onclick={(e) => {
			e.stopPropagation();
			taskStore.deleteTask(index);
		}}
		type="button"
		aria-label="Delete task"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-5 w-5 text-red-500 hover:text-red-400"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M3 6h18"></path>
			<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
			<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
			<line x1="10" y1="11" x2="10" y2="17"></line>
			<line x1="14" y1="11" x2="14" y2="17"></line>
		</svg>
	</button>
</label>
