function MyComponent(props) {
    const { name, age, city, hasPet } = props.obj;

    return (
        <div>
            <h1>
                Hello {name}, are you {age} and you from {city} and{" "}
            </h1>
            <h2> I {hasPet ? "have a cat" : "don't have a pet"} </h2>
        </div>
    );
}
export default MyComponent;
