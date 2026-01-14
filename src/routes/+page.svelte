<script>
	import TaskInput from '$lib/components/TaskInput.svelte';
	import TaskList from '$lib/components/TaskList.svelte';
</script>

<div class="flex min-h-screen items-center justify-center bg-zinc-900 p-8">
	<div class="w-full max-w-2xl space-y-6">
		<h1 class="text-4xl font-bold text-white">Yuki's AI Powered Todo List 🥸🤖💪</h1>
		<TaskInput />
		<TaskList />
	</div>
</div>
