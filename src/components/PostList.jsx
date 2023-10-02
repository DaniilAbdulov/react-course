import React from "react";
import PostItem from "./PostItem";
const PostList = function ({ posts, title }) {
    return (
        <div>
            <h2> {title} </h2>
            {posts.map((post) => (
                <PostItem post={post} key={post.id} />
            ))}
        </div>
    );
};
export default PostList;
