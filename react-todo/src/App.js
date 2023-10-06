import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";
function App() {
    const [todos, setTodos] = useState([]);
    const addTodoHandler = (text) => {
        const newTodo = {
            text: text,
            isCompleted: false,
            id: Date.now(),
        };
        setTodos([...todos, newTodo]);
    };
    const deleteTodoHandler = (index) => {
        setTodos(todos.filter((todo) => todo.id !== index));
    };
    const toggleTodoHandler = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo }
            )
        );
    };
    const deleteAllTodosHandler = () => {
        setTodos([]);
    };
    const clearCompletedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
    };
    const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;
    return (
        <div className="App">
            <h1>Todo app</h1>
            <TodoForm addTodo={addTodoHandler} />
            {!!todos.length && (
                <TodosActions
                    deleteTodos={deleteAllTodosHandler}
                    clearCompletedTodos={clearCompletedTodosHandler}
                    completedTodosExist={!!completedTodosCount} //что бы конвертировать в bool
                />
            )}

            <TodoList
                todos={todos}
                deleteTodo={deleteTodoHandler}
                toggleTodo={toggleTodoHandler}
            />
            {completedTodosCount > 0 && (
                <h2>{`You have completed ${completedTodosCount} ${
                    completedTodosCount > 1 ? "todos" : "todo"
                }`}</h2>
            )}
        </div>
    );
}

export default App;
