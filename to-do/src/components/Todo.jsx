import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
          </div>
          <button onClick={() => completeTodo(todo.id)}>completar</button>
          <button onClick={() => removeTodo(todo.id)}>x</button>
        </div>
  )
}

export default Todo