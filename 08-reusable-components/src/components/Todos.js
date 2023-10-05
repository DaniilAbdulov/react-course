import { useState, useEffect } from "react";
import Todo from "./Todo";
function Todos() {
    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const todoLimit = 6;
    useEffect(() => {
        console.log("Callback in useEffect called"); //один раз в консоли,т.к []
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${todoLimit}/`)
            .then((response) => response.json())
            .then((json) => setTodos(json))
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }, [todoLimit]);
    //пустой [] зависимостей означает однократное выполнение useEffect
    /* если в [] передать какой-то объект, то useEffect будет вызыватся 
     при каждом изменении переданного объекта
     Поэтому, если передать [todo], то useEffect будет вызываться бескончно
     
     Можно объявить переменную todoID и передать ее fetct и в [todoID].При изменении 
     данной переменной useEffect будет грузить другой todo с введеным id
     */
    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }
    return (
        <div>
            {!isLoading ? (
                todos.map((todo) => {
                    return <Todo {...todo} key={todo.id} />;
                })
            ) : (
                <p>Loading...</p>
            )}
        </div>
    ); //условная отрисовка
}
export default Todos;
