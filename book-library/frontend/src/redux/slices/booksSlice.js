import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";
const initialState = {
    books: [],
    isLoading: false,
};

export const fetchBook = createAsyncThunk(
    "books/fetchBook",
    async (url, thunkAPI) => {
        try {
            const res = await axios.get(url);
            return res.data;
        } catch (error) {
            thunkAPI.dispatch(setError(error.message));
            throw error;
        }
    }
);

const booksSlice = createSlice({
    name: "books",
    initialState: initialState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        deleteBook: (state, action) => {
            return {
                ...state,
                books: state.filter((book) => book.id !== action.payload),
            };
        },
        toggleFavorite: (state, action) => {
            return state.books.forEach((book) => {
                if (book.id === action.payload) {
                    book.isFavorite = !book.isFavorite;
                }
            });
        },
    },
    extraReducers: {
        [fetchBook.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchBook.fulfilled]: (state, action) => {
            state.isLoading = false;
            if (action.payload.title && action.payload.author) {
                const book = {
                    id: Date.now(),
                    title: action.payload.title,
                    author: action.payload.author,
                    isFavorite: false,
                };
                state.books.push(book);
            }
        },
        [fetchBook.rejected]: (state) => {
            state.isLoading = false;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(fetchBook.fulfilled, (state, action) => {
    //         // если fetchBook получил статус fulfield, то будет выполнен callback
    //         if (action.payload.title && action.payload.author) {
    //             const book = {
    //                 id: Date.now(),
    //                 title: action.payload.title,
    //                 author: action.payload.author,
    //                 isFavorite: false,
    //             };
    //             state.books.push(book);
    //         }
    //     });
    // },
});
// export const thunkFunction = async (dispatch, getState) => {
//     try {
//         const res = await axios.get("http://localhost:4000/random-book");
//         if (res.data && res.data.title && res.data.author) {
//             const book = {
//                 id: Date.now(),
//                 title: res.data.title,
//                 author: res.data.author,
//                 isFavorite: false,
//             };
//             dispatch(addBook(book));
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };
export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;
export const selectBooks = (state) => state.books.books;
export const selectIsLoading = (state) => state.books.isLoading;

export default booksSlice.reducer;
