import { FormEvent, useState } from "react"
import { useTodo } from "../context/TodoContext"



const TodoForm=()=>{
    const{addTodo}=useTodo()
    const[input,setInput]=useState <string>('')//입력 받을 항목
        const handleSubmit =(e:FormEvent<HTMLFormElement>) =>{
            e.preventDefault()
            const text = input.trim()
        
            if(text){
                addTodo(text)
                setInput('')
            }
    }
    return (            
    <form onSubmit={handleSubmit} className="todo-container__form">
    <input 
    value={input}
    onChange={(e) => setInput(e.target.value)} 
    type="text" 
    className="todo-container__input"
    placeholder="할 일 입력"
    required
    />
    <button type="submit" className="todo-container__button">
        추가
    </button>
</form>)
}

export default TodoForm