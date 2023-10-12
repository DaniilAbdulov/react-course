import { configureStore } from "@reduxjs/toolkit";
// import booksReducer from "./Books/reducer";
import booksSlice from "./slices/booksSlice";
import filterReducer from "./slices/filterSlice";
const store = configureStore({
    reducer: {
        // books: booksReducer,
        books: booksSlice,
        filter: filterReducer,
    },
});
export default store;
