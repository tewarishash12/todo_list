import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState : {
        status: "all",
        colors: []
    },
    reducers: {
        set_filter_status: (state,{payload}) =>{
            state.status = payload;
        },
        set_filter_color: (state,{payload}) =>{
            state.colors = payload;
        }
    }
})

export const { set_filter_status,set_filter_color } = filterSlice.actions;
export default filterSlice.reducer;