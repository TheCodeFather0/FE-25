import { v4 } from "uuid";
const url = "http://localhost:3000/todos/";

export const addTodo = (e, input, dispatch) => {
  e.preventDefault();
  const newTodo = {
    id: v4(),
    todo: input.value,
    isCompleted: false,
  };

  fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(newTodo),
  }).then((res) => {
    if (res.ok) {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          dispatch({
            type: "ADD_NEW_TODO",
            data,
          });
        });
    }
  });

  input.value = "";
  input.focus();
};
