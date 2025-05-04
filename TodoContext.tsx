import { createContext, PropsWithChildren, useContext, useState } from "react";
import { TTodo } from "../types/todo";

interface ITodoContext{
    todos: TTodo[]
    doneTodos: TTodo[]
    addTodo: (text: string) => void
    completeTodo: (todo: TTodo) => void
    deleteTodo: (todo: TTodo) => void
}

export const TodoContext = createContext<ITodoContext | undefined>(undefined)

export const TodoProvider = ({children}: PropsWithChildren) => {
    const [todos,setTodos] = useState<TTodo[]>([])
    const[doneTodos,setDoneTodos]=useState<TTodo[]>([])

    const addTodo = (text: string) => {
        const newTodo:TTodo ={id:Date.now(), text}
        setTodos((prevtodos)=>[...prevtodos,newTodo])
    }
    const completeTodo = (todo: TTodo) =>{
        setTodos((prevTodos)=>prevTodos.filter((t)=>t.id !== todo.id)) //제거 코드
        setDoneTodos(prevDoneTodos=>[...prevDoneTodos,todo]) 
    }

    const deleteTodo = (todo:TTodo) =>{
        setDoneTodos((prevDoneTodo)=>prevDoneTodo.filter((t)=>t.id !==todo.id))
    }

    return <TodoContext.Provider value={{todos,doneTodos,addTodo,completeTodo,deleteTodo }}>{children}</TodoContext.Provider>
}

export const useTodo = () => {
    const context = useContext(TodoContext)
    if(!context){
        throw new Error('useTodo must be used within a TodoProvider')
    }

    return context
}//undefined일 경우 에러 발생 무조건 context가 있음을 알려줌