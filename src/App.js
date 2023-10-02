import React, { useState } from "react";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import "./styles/App.css";
function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: "First Post", body: "Description 1" },
        { id: 2, title: "Second Post", body: "Description 02" },
        { id: 3, title: "Third Post", body: "Description 3" },
    ]);

    return (
        <div className="App">
            <Counter />
            <PostList posts={posts} title={"Post list"} />
        </div>
    );
}

export default App;
