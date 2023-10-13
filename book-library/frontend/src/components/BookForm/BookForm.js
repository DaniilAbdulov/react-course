import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
// import { addBook } from "../../redux/Books/actionCreators";
import { addBook } from "../../redux/slices/booksSlice";
import "./BookForm.css";
function BookForm() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author) {
            //dispatch action
            const book = {
                id: Date.now(),
                title: title,
                author: author,
                isFavorite: false,
            };
            dispatch(addBook(book));
            //отправляем книгу в store
            setTitle("");
            setAuthor("");
        }
    };

    const handleAddRandomBook = async () => {
        try {
            const res = await axios.get("http://localhost:4000/random-book");
            if (res.data && res.data.title && res.data.author) {
                const book = {
                    id: Date.now(),
                    title: res.data.title,
                    author: res.data.author,
                    isFavorite: false,
                };
                dispatch(addBook(book));
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="app-block book-form">
            <h2>Add a new book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title: </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="author">Author: </label>
                    <input
                        type="text"
                        id="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    ></input>
                </div>
                <button type="submit">Add book</button>
                <button type="button" onClick={handleAddRandomBook}>
                    Add random book
                </button>
            </form>
        </div>
    );
}
export default BookForm;
