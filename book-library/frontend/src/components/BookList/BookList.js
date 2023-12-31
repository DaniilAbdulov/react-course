import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
// import { deleteBook, toggleFavorite } from "../../redux/Books/actionCreators";
import {
    deleteBook,
    selectBooks,
    toggleFavorite,
} from "../../redux/slices/booksSlice";
import { BsBookmarkStarFill, BsBookmarkStar } from "react-icons/bs";
import "./BookList.css";
import {
    selectTitleFilter,
    selectAuthorFilter,
    selectOnlyFavoriteFilter,
} from "../../redux/slices/filterSlice";
function BookList() {
    const books = useSelector(selectBooks);
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);
    //подписались на обновление state В redux

    const filteredBooks = books.filter((book) => {
        const mathesTitle = book.title
            .toLowerCase()
            .includes(titleFilter.toLowerCase());
        const mathesAuthor = book.author
            .toLowerCase()
            .includes(authorFilter.toLowerCase());
        const mathesFavorite = onlyFavoriteFilter ? book.isFavorite : true;
        return mathesTitle && mathesAuthor && mathesFavorite;
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

    const highlightMatch = (text, filter) => {
        if (!filter) return text;

        const regex = new RegExp(`(${filter})`, "gi");
        return text.split(regex).map((substring, i) => {
            if (substring.toLowerCase() === filter.toLowerCase()) {
                return (
                    <span key={i} className="highlight">
                        {substring}
                    </span>
                );
            }
            return substring;
        });
    };
    //подсветка введеных значений
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
                                {++i}. {highlightMatch(book.title, titleFilter)}{" "}
                                by{" "}
                                <strong>
                                    {highlightMatch(book.author, authorFilter)}
                                </strong>
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
