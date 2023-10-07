import courses from "../data/courses";
import { useParams } from "react-router-dom";
function SingleCourse() {
    const params = useParams();
    const course = courses.find((c) => c.slug === params.courseSlug);
    return (
        <>
            <h1>Single course</h1>
            <p>{course.title}</p>
        </>
    );
}
export default SingleCourse;
