import { useState } from "react"

function TodoList(){

    const[todoLists, settodoLists] = useState([])
    const[newtasks, setnewtasks] = useState("")

    function handleInput(event){
        setnewtasks(event.target.value);
    }
    function addTask(){
        settodoLists(t => ([...t, newtasks]))
    }
    function deleteTask(index){
        const updatedTasks = todoLists.filter((_, i) => (i !== index))
        settodoLists(updatedTasks)
    }

    return (
        <div className="todo-lists">
            <h1>To-Do List</h1>
            
            <div>
                <input type="text" value={newtasks} onChange={handleInput} placeholder="add new task..."/>
                <button className="add-button" onClick={addTask} >Add</button>
            </div>
            
            <ol>
                {todoLists.map((todoList, index) => <li key={index}>
                    <span>{todoList}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)} >Delete</button>
                </li>
                )}
            </ol>

        </div>
    )
}

export default TodoList