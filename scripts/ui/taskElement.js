/**
 * Creates a DOM element for a task.
 * @param {Object} task - task data
 * @returns {HTMLElement} task element
 */
export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-div");

  taskDiv.textContent = task.title;

  return taskDiv;
}
