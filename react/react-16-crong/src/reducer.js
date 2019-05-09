export const todoReducer = (todos, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return [...todos, { id: todos.length, title: payload, status: 'todo' }];
    case "SET_INIT_DATA":
      return payload;
    case "CHANGE_TODO_STATUS":
      return todos.map(todo => {
        if (todo.id === +payload) {
          if (todo.status === 'done') todo.status = "todo";
          else todo.status = "done"
        }
        return todo
      });
    default:
      return;
  }
}