import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
          <div className="content">
            <p>{todo.text}</p>
            <p className="category">({todo.category})</p>
          </div>
          <div className='btn-todo'>
          <button className='btn-complete btn' onClick={() => completeTodo(todo.id)}>Done!</button>
          <button className='btn btn-delete' onClick={() => removeTodo(todo.id)}>x</button>
          </div>
        </div>
  )
}

export default Todo