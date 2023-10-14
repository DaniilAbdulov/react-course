import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaSpinner } from "react-icons/fa";
// import { addBook } from "../../redux/Books/actionCreators";
// import { addBook, thunkFunction } from "../../redux/slices/booksSlice";
import { setError } from "../../redux/slices/errorSlice";
import { addBook, fetchBook } from "../../redux/slices/booksSlice";
import "./BookForm.css";
function BookForm() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [isLoading, setIsloading] = useState(false);
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
        } else {
            dispatch(setError("You must fill title and author!!"));
        }
    };

    const handleAddRandomBook = async () => {
        // dispatch(thunkFunction);
        try {
            setIsloading(true);
            await dispatch(
                fetchBook("http://localhost:4000/random-book-delayed")
            );
        } finally {
            setIsloading(false);
        }

        // dispatch(fetchBook("http://localhost:4000/random-book"));
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
                <button
                    type="button"
                    onClick={handleAddRandomBook}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <span>Loading book</span>
                            <FaSpinner className="spinner" />
                        </>
                    ) : (
                        <>
                            <span>Add random book</span>
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
export default BookForm;
