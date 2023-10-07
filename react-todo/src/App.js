// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import TodoPage from "./views/TodoPage";
import Contacts from "./components/Contacts";
import About from "./components/About";
import MainLayout from "./Layouts/MainLayout";
import Home from "./components/Home";
import Courses from "./components/Courses";
import SingleCourse from "./components/SingleCourse";
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="todos" element={<TodoPage />} />
                        <Route path="about" element={<About />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="courses" element={<Courses />} />
                        <Route
                            path="courses/:courseSlug"
                            element={<SingleCourse />}
                        />
                        <Route path="*" element={<h2>Page not found</h2>} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
