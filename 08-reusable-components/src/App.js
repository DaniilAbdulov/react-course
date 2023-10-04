// import { useState } from "react";
import "./App.css";
import MyComponent from "./components/MyComponent";
// import persons from "./data/persons";

const num = 10;
function App() {
    return <div className="App">{num < 20 && <MyComponent />}</div>;
}

export default App;
