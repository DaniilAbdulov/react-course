import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
function TodosActions({
    deleteTodos,
    clearCompletedTodos,
    completedTodosExist,
}) {
    return (
        <>
            <Button title="Reset todos" onClick={deleteTodos}>
                <RiRefreshLine />
            </Button>
            <Button
                title="Clear completed todos"
                onClick={clearCompletedTodos}
                disabled={!completedTodosExist}
            >
                <RiDeleteBin2Line />
            </Button>
        </>
    );
}
export default TodosActions;
