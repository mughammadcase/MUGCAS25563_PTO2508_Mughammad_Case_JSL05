import {
  loadTasksFromStorage,
  saveTasksToLocalStorage,
} from "../utils/localStorage.js";
import { clearExistingTasks, renderTasks } from "./render.js";
import { createTask } from "../tasks/taskManager.js";

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
 * and submitting new tasks
 */
export function setupNewTaskModalHandler() {
  const openBtn = document.getElementById("add-new-task-btn");
  const modal = document.querySelector(".modal-overlay");
  const closeBtn = document.getElementById("cancel-add-btn");
  const form = document.getElementById("new-task-modal-window");

  openBtn.addEventListener("click", () => {
    modal.showModal();
  });

  closeBtn.addEventListener("click", () => {
    modal.close();
  });

  // Adds submit functionality
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title-input").value;
    const description = document.getElementById("desc-input").value;
    const status = document.getElementById("select-status").value;

    const tasks = loadTasksFromStorage();

    const newTask = createTask(tasks, title, description, status);

    tasks.push(newTask);

    saveTasksToLocalStorage(tasks);

    clearExistingTasks();
    renderTasks(tasks);

    form.reset();
    modal.close();
  });
}
