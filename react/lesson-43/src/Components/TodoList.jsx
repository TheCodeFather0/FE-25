import React, { useState } from 'react'

const TodoList = () => {
    const [todos,setTodos] = useState(["zibilleri at","eve yigis",'colde bayirda qalma'])
    const [newTodo,setNewTodo] = useState("")

  return (
    <div>
        <input type="text" placeholder='new todo' value={newTodo}
         onChange={({target:{value}}) => setNewTodo(value)}/>
        
        <button onClick={() => {
            setTodos([newTodo,...todos])
            setNewTodo("");
        }}>
            add todo
        </button>

        <ul>
           {todos.map((todo,index) => {
            return <li key={index}>{todo}</li>
           })}
        </ul>
    </div>
  )
}

export default TodoList