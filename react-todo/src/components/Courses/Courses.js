import { Link } from "react-router-dom";
import courses from "../../data/courses";

function Courses() {
    return (
        <>
            <h2>Courses:</h2>
            {courses.map((course) => (
                <div key={course.id}>
                    <Link to={course.slug}> {course.title} </Link>
                </div>
            ))}
        </>
    );
}
export default Courses;
