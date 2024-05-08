import { Todo } from "../Todo";
import { addTodo } from "../AddTodo";
import { reducer } from "../../Reducers";
import { GetAllData } from "../GetAllData";
import ReactPaginate from "react-paginate";
import { useEffect, useReducer, useRef, useState } from "react";

const Todos = () => {
  const [states, dispatch] = useReducer(reducer, {
    todos: [],
    mode: "light",
  });

  const inpRef = useRef();
  const searchInpRef = useRef();

  const itemsPerPage = 5;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = states.todos.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(states.todos.length / itemsPerPage);

  const handleMode = () => dispatch({ type: "CHANGE_MODE" });

  useEffect(() => {
    GetAllData(dispatch);
  }, []);

  useEffect(() => {
    document.body.classList = states.mode;
  }, [states.mode]);

  const handleChange = () => dispatch({ type: "SEARCH_TODO" });

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % states.todos.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <div>
      <div className="modeContainer">
        <button onClick={handleMode}>change mode</button>
        <hr />
      </div>

      <div className="addTodoBox">
        <form onSubmit={(e) => addTodo(e, inpRef.current, dispatch)}>
          <input type="text" placeholder="new todo" ref={inpRef} />
          <button type="submit">add todo</button>
        </form>
        <hr />
      </div>

      <div className="searchContainer">
        <input
          type="text"
          placeholder="search todo"
          ref={searchInpRef}
          onChange={handleChange}
        />
        <hr />
      </div>

      <div className="todos">
        <Todo currentItems={currentItems} dispatch={dispatch} value={searchInpRef?.current?.value}/>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Todos;
