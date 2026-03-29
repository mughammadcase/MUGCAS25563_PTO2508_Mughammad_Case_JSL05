/****
 * Creates a new task object with an incrementing id
 * @param {string} title
 * @param {string} description
 * @param {string} status
 * @param {Array} tasks - existing tasks
 * @returns {Object} new task
 */
export function createTask(title, description, status, tasks) {
  let nextId = 1;

  if (tasks.length > 0) {
    const ids = tasks.map((task) => task.id);
    nextId = Math.max(...ids) + 1;
  }

  return {
    id: nextId,
    title,
    description,
    status,
  };
}
