import { useState, useEffect } from "react";
import Post from "./Post";
function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(
                    `https://jsonplaceholder.typicode.com/posts`
                );
                const posts = await res.json();
                setPosts(posts);
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        }
        fetchData();
    }, []);
    return (
        <div>
            {!isLoading ? (
                posts.map((post) => {
                    return <Post {...post} key={post.id} />;
                })
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
export default Posts;
