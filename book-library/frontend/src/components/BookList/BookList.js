import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/Books/actionCreators";
import "./BookList.css";
function BookList() {
    const books = useSelector((state) => state.books);
    //подписались на обновление state В redux
    const dispatch = useDispatch();

    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };
    //удаление книги
    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {books.length === 0 ? (
                <p>No books</p>
            ) : (
                <ul>
                    {books.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++i}. {book.title} by{" "}
                                <strong>{book.author}</strong>
                            </div>
                            <div className="book-actions">
                                <button
                                    onClick={() => handleDeleteBook(book.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default BookList;
