import React from 'react'
import './Todos.css'
function Todos({todo}) {
  return (
    <div className='todos'>
        {todo.map((todo) => <h5>{todo.task}</h5>)}
    </div>
  )
}

export default Todos;