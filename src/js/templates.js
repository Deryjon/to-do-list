export function toDoList(todo, id) {
  return `
  <li
    id="${id}"
    done="${todo.done}"
    class="shadow-xl border border-gray p-2 rounded-md mt-2 flex justify-between items-center"
  >
    <p class="${todo.done && "text-green-500"}">
      <i class="fas fa-check-circle"></i>
      <span class="todo-text">${todo.task}</span>
    </p>

    <div class="actions">
      <button
        class="edit bg-yellow-500 py-2 px-4 rounded-md text-white text-xs"
      >
        <i class="fas fa-edit pointer-events-none"></i>
      </button>
      <button
        class="delete bg-red-500 py-2 px-4 rounded-md text-white text-xs"
      >
        <i class="fas fa-trash pointer-events-none"></i>
      </button>
      <button
        class="cancel bg-dark-blue hidden py-2 px-4 rounded-md text-white text-xs"
      >
        <i class="fas fa-times  pointer-events-none"></i>
      </button>
    </div>
  </li>
  `;
}
