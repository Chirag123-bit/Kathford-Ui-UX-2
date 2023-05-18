import React, { useState } from 'react'

const AddComponent = ({ addTodo }) => {
    const [task, setTask] = useState("")

    const addTask = () => {
        if (task != "") {
            addTodo(task)
        }
    }
    return (
        <div id="addTodoComponent" className='container'>
            <input type="text" name="addTodo" id="addTodo" placeholder='Add Todo'
                onChange={(e) => setTask(e.target.value)}
            />
            <i class="fa-solid fa-plus" onClick={addTask}></i>
        </div>
    )
}

export default AddComponent