import { initialTasks } from "../../initialData.js";

/**
 * Loads tasks from localStorage.
 * If no tasks are found, fall back to initialTasks and save to localStorage.
 * @returns {Array} Array of tasks from localStorage/initialTasks
 */
export function loadTasksFromStorage() {
  const stored = localStorage.getItem("tasks");

  if (stored)
    try {
      return JSON.parse(stored);
    } catch (error) {
      console.error("Error parsing tasks from localStorage:", error);
    }
  localStorage.setItem("tasks", JSON.stringify(initialTasks));
  return initialTasks;
}

/**
 * Saves tasks to localStorage.
 * @param {Array} tasks - Array of tasks to save to localStorage
 */
export function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
