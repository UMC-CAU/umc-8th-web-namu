import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import {useTodo} from "../context/TodoContext"

/*TodoContext에서는 사용할 메소드들을 정의함
TodoForm에서는 할 일을 입력받음
TodoList에서는 리스트들의 목록(아이템)을 보여줌*/

const Todo = () => {
 
        const {todos,completeTodo,deleteTodo,doneTodos} = useTodo() //구조분해할당 
    

    return (
        <div className="todo-container">
            <h1 className="todo-container__header">Namu Todo</h1>
            <TodoForm />
            <div className="render-container"></div>
            <TodoList 
            title='할 일' 
            todos={todos} 
            buttonLabel='완료' 
            buttonColor='#28a745'
            onClick={completeTodo}/>
            <TodoList 
            title='완료' 
            todos={doneTodos} 
            buttonLabel='삭제'
            buttonColor='#dc3545'
            onClick={deleteTodo}/>
        </div>
    )
}

export default Todo