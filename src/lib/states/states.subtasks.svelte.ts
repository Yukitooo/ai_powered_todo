import type { Tasks } from '$lib/types';

// State to hold all tasks
let tasks = $state<Tasks[]>([

]);

// Export the state and methods to interact with it
export const taskStore = {
    // Getter for tasks
    get tasks() {
        return tasks;
    },

    addTask(task: Tasks) {
        tasks = [...tasks, task]
    },

    setTask(task) {
        tasks = task
    },

    deleteTask(index: number) {
        tasks.splice(index, 1)
    },

    editTask(newTask: string, index: number) {
        tasks[index].task = newTask;
    }
};