import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { deleteBook, toggleFavorite } from "../../redux/Books/actionCreators";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import "./BookList.css";
import { selectTitleFilter } from "../../redux/slices/filterSlice";
function BookList() {
    const books = useSelector((state) => state.books);
    const titleFilter = useSelector(selectTitleFilter);
    //подписались на обновление state В redux

    const filteredBooks = books.filter((book) => {
        const mathesTitle = book.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase());
        return mathesTitle;
    });
    //
    const dispatch = useDispatch();
    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id));
    };
    //удаление книги
    const handleToggleFavorite = (id) => {
        dispatch(toggleFavorite(id));
    };
    //добавление в избранное
    return (
        <div className="app-block book-list">
            <h2>Book List</h2>
            {filteredBooks.length === 0 ? (
                <p>No books</p>
            ) : (
                <ul>
                    {filteredBooks.map((book, i) => (
                        <li key={book.id}>
                            <div className="book-info">
                                {++i}. {book.title} by{" "}
                                <strong>{book.author}</strong>
                            </div>
                            <div className="book-actions">
                                <span
                                    onClick={() =>
                                        handleToggleFavorite(book.id)
                                    }
                                >
                                    {book.isFavorite ? (
                                        <BsBookmarkStarFill className="star-icon" />
                                    ) : (
                                        <BsBookmarkStar className="star-icon" />
                                    )}
                                </span>
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
