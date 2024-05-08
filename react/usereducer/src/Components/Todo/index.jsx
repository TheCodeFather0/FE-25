import { handleDelete } from "../DeteleTodo";

export const Todo = ({ currentItems, dispatch, value }) => {
  return currentItems.map(({ id, todo }) => {
    return (
      todo.includes(value) && (
        <div key={id} className="todo">
          {todo}
          <button onClick={() => handleDelete(id, dispatch)}>🗑️</button>
        </div>
      )
    );
  });
};
