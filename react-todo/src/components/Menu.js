import { NavLink } from "react-router-dom";
function Menu() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/user">User</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/Contacts">Contacts</NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <NavLink to="/todos">Todos</NavLink>
        </nav>
    );
}
export default Menu;
