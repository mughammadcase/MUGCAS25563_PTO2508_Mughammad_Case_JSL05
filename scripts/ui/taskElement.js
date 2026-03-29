/**
 * Creates a DOM element for a task.
 * @param {Object} task - task data
 * @returns {HTMLElement} task element
 */
export function createTaskElement(task) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-div");

  taskDiv.textContent = task.title;

  // When task is clicked then open modal
  taskDiv.addEventListener("click", () => {
    const modal = document.getElementById("task-modal");
    const titleInput = document.getElementById("task-title");
    const descInput = document.getElementById("task-desc");
    const statusSelect = document.getElementById("task-status");

    titleInput.value = task.title;
    descInput.value = task.description;
    statusSelect.value = task.status;

    modal.showModal();
  });

  return taskDiv;
}
