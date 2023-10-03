import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
    const obj = {
        name: "Daniil",
        age: 25,
        city: "Tyumen",
        hasPet: true,
    };

    return (
        <div className="App">
            <MyComponent obj={obj} />
        </div>
    );
}

export default App;
