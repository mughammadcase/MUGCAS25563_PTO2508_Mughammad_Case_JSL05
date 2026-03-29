/**
 * Handles the closing of a modal for task details
 */
export function setupModalCloseHandler() {
  const modal = document.getElementById("task-modal");
  const closeBtn = document.getElementById("close-modal-btn");

  closeBtn.addEventListener("click", () => {
    modal.close();
  });
}

/**
 * Handles the opening of the modal for adding a new task
 */
export function setupNewTaskModalHandler() {
  const openBtn = document.getElementById("add-new-task-btn");
  const modal = document.querySelector(".modal-overlay");
  const closeBtn = document.getElementById("cancel-add-btn");

  openBtn.addEventListener("click", () => {
    modal.showModal();
  });

  closeBtn.addEventListener("click", () => {
    modal.close();
  });
}
