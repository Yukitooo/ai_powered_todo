<script lang="ts">
	interface Props {
		doneCount: number;
		totalCount: number;
	}

	let { doneCount, totalCount }: Props = $props();
</script>

<div class="mt-4 border-t border-zinc-700 pt-4">
	<div class="flex items-center justify-between">
		<p class="text-sm font-medium text-zinc-400">Task Progress</p>
		<p class="text-sm font-semibold text-zinc-100">
			<span class="text-blue-500">{doneCount}</span> / {totalCount}
		</p>
	</div>
	<div class="mt-2 h-2 overflow-hidden rounded-full bg-zinc-700">
		<div
			class="h-full rounded-full bg-linear-to-r {doneCount != totalCount
				? 'from-blue-600 to-blue-500'
				: 'from-green-600 to-green-500'} transition-all duration-300"
			style="width: {totalCount > 0 ? (doneCount / totalCount) * 100 : 0}%"
		></div>
	</div>
</div>
