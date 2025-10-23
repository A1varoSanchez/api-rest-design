let tasks = []; // Simulación de datos en memoria

export function getAllTasks() {
  return tasks;
}

export function createTask(taskData) {
  const newTask = {
    id: String(tasks.length + 1),
    ...taskData,
  };
  tasks.push(newTask);
  return newTask;
}