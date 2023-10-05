function Todo(props) {
    const { title, completed } = props;
    return (
        <div className="todo">
            <div
                className="todo__body"
                style={{ backgroundColor: completed ? "green" : "red" }}
            >
                {" "}
                {title}{" "}
            </div>
        </div>
    );
}
export default Todo;
