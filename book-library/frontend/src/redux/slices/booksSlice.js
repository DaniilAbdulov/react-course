import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = [];

const booksSlice = createSlice({
    name: "books",
    initialState: initialState,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        },
        deleteBook: (state, action) => {
            return state.filter((book) => book.id !== action.payload);
        },
        toggleFavorite: (state, action) => {
            return state.map((book) =>
                book.id === action.payload
                    ? { ...book, isFavorite: !book.isFavorite }
                    : book
            );
        },
    },
});
export const thunkFunction = async (dispatch, getState) => {
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
export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;
export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
