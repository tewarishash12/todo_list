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
        }
    }
})

export const { set_filter_status } = filterSlice.actions;
export default filterSlice.reducer;