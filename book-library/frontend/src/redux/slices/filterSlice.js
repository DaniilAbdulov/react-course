import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    author: "",
    onlyFavorite: false,
};
const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            state.title = action.payload;
            //state.title = action.payload; работает благодаря
            //библоитеке immor в toolkit
            // return { ...state, title: action.payload };
        },
        setAuthorFilter: (state, action) => {
            state.author = action.payload;
        },
        setOnlyFavoriteFilter: (state) => {
            state.onlyFavorite = !state.onlyFavorite;
        },
        resetFilters: () => {
            return initialState;
        },
    },
});

// console.log(filterSlice.actions.setTitleFilter("test"));
//{type: 'filter/setTitleFilter', payload: 'test'}

export const {
    setTitleFilter,
    resetFilters,
    setAuthorFilter,
    setOnlyFavoriteFilter,
} = filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title; //выбрать из стэйта тайтл
export const selectAuthorFilter = (state) => state.filter.author; //выбрать из стэйта автора
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite; //выбрать из стэйта избранные
export default filterSlice.reducer;
