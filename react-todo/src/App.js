import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
function App() {
    const [todos, setTodos] = useState(["one", "two"]);
    function addTodoHandler(text) {
        setTodos([...todos, text]);
    }
    return (
        <div className="App">
            <h1>Todo app</h1>
            <TodoForm addTodo={addTodoHandler} />
            <TodoList todos={todos} />
        </div>
    );
}

export default App;
