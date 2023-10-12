import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
};
const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            return { ...state, title: action.payload };
        },
    },
});

// console.log(filterSlice.actions.setTitleFilter("test"));
//{type: 'filter/setTitleFilter', payload: 'test'}

export const setTitleFilter = filterSlice.actions.setTitleFilter;
export const selectTitleFilter = (state) => state.filter.title; //выбрать из стэйта тайтл
export default filterSlice.reducer;
