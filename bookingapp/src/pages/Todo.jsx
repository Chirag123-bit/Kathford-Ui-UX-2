import React from 'react';
import "./todo.css"

const Todo = () => {
    return (
        <div id="todoContainer">
            <div id="todoBox">
                <h3 className='text-white text-center py-4'>My Todos</h3>

                <div id="addTodoComponent" className='container'>
                    <input type="text" name="addTodo" id="addTodo" placeholder='Add Todo' />
                    <i class="fa-solid fa-plus"></i>
                </div>


                <div id="todos" className='container my-4'>
                    <div className="alert pending my-3" role="alert">
                        A simple primary alert—check it out!
                    </div>
                    <div className="alert pending my-3" role="alert">
                        A simple primary alert—check it out!
                    </div>
                    <div className="alert pending my-3" role="alert">
                        A simple primary alert—check it out!
                    </div>
                    <div className="alert completed my-3" role="alert">
                        A simple primary alert—check it out!
                    </div>
                    <div className="alert pending my-3" role="alert">
                        A simple primary alert—check it out!
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Todo