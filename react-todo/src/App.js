// import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MyRouter from "./Router/MyRouter";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <MyRouter />
            </div>
        </BrowserRouter>
    );
}

export default App;
