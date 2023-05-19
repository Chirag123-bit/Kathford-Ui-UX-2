import React from 'react'

const TodoItem = ({ todo, updateTodo }) => {
    return (
        <div className={todo.status == "pending" ? "alert pending my-3" : "alert completed my-3"} role="alert"
            onClick={() => updateTodo(todo)}
        >
            {todo.task}
        </div>
    )
}

export default TodoItem