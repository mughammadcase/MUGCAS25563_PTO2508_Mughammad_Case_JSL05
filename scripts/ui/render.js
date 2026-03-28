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
