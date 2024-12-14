export interface Task {
  id: number;
  name: string;
}

export const useTaskStore = defineStore('taskStore', () => {
  const tasks = ref<Task[]>([]); // タスクリスト

  // タスクを追加する関数
  const addTask = (name: string) => {
    const newTask: Task = {
      id: Date.now(), // Generate a unique ID
      name,
    };
    tasks.value.push(newTask);
  };

  // タスクを削除する関数
  const removeTask = (id: number) => {
    tasks.value = tasks.value.filter((task) => task.id !== id);
  };

  return { tasks, addTask, removeTask };

});