import { Routes, Route } from "react-router-dom";
import TodoPage from "../views/TodoPage";
import Contacts from "../components/Contacts";
import About from "../components/About";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home";
import Courses from "../components/Courses/Courses";
import SingleCourse from "../components/Courses/SingleCourse";
import User from "../components/User/User";

function MyRouter() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="todos" element={<TodoPage />} />
                    <Route path="user" element={<User />} />
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
    );
}
export default MyRouter;
