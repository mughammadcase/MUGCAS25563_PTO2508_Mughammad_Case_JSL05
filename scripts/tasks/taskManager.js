/**
 * Creates a new task with incremental ID
 * @param {Array} tasks
 * @param {string} title
 * @param {string} description
 * @param {string} status
 * @returns {Object}
 */
export function createTask(tasks, title, description, status) {
  return {
    id: tasks.length + 1,
    title,
    description,
    status,
  };
}
