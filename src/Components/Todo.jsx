import { useState } from 'react';
import './CSS/Todo.css';
import { useRef } from 'react';
import { useEffect } from 'react';
import TodoItems from './TodoItems';

const Todo = () => {

  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodos([...todos, {no : count, text : inputRef.current.value, display : ""}]);
    setCount(count+1);
    inputRef.current.value = "";
  }

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")))
  }, [])

  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos))
    }, 100);
  }, [todos]);


  return (
    <div className='todo'>
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
            <input ref = {inputRef} type="text" placeholder='Add Your Task' className='todo-input'/>
            <div onClick = {() => {add()}} className="todo-add-btn">ADD</div>
        </div>
        <div className="todo-list">
            {todos.map((item, index) => {
              return <TodoItems key = {index} setTodos = {setTodos} no={item.no} display={item.display} text = {item.text}/>
            })}
        </div>
    </div>
  )
}

export default Todo