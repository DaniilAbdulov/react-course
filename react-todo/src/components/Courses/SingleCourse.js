import courses from "../../data/courses";
import { Link, useParams } from "react-router-dom";
function SingleCourse() {
    const params = useParams();
    const course = courses.find((c) => c.slug === params.courseSlug);
    if (!course) {
        return <h2>Not found</h2>;
    }
    return (
        <>
            <h1>Single course</h1>
            <p>{course.title}</p>
            <Link to="../courses">To all courses</Link>
        </>
    );
}
export default SingleCourse;
