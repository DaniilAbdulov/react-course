import { useSelector } from "react-redux/es/hooks/useSelector";
import "./BookList.css";
function BookList() {
    const books = useSelector((state) => state.books);
    //подписались на обновление state В redux
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
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default BookList;
