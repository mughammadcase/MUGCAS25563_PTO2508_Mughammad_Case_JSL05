import { createTaskElement } from "./taskElement.js";

/**
 * Clears existing tasks from the UI, selects all elements with the class "tasks-container"
 * and sets their innerHTML to an empty string
 */
export function clearExistingTasks() {
  const containers = document.querySelectorAll(".tasks-container");

  containers.forEach((container) => {
    container.innerHTML = "";
  });
}

/**
 * Renders all tasks into their respective columns based on status
 * @param {Array} tasks - Array of task objects to be rendered
 */
export function renderTasks(tasks) {
  const columns = document.querySelectorAll(".column-div");

  columns.forEach((column) => {
    const status = column.dataset.status;
    const container = column.querySelector(".tasks-container");

    const filteredTasks = tasks.filter((task) => task.status === status);

    const header = column.querySelector(".columnHeader");
    header.textContent = `${status.toUpperCase()} (${filteredTasks.length})`;

    filteredTasks.forEach((task) => {
      const taskElement = createTaskElement(task);
      container.appendChild(taskElement);
    });
  });
}
