import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState : {
        status: "all",
        colors: []
    },
    reducers: {
        set_filter_status: (state,{payload}) =>{
            state.status = payload.status;
        },
        set_filter_color: (state,{payload}) =>{
            const colorIndex = state.colors.indexOf(payload.color)
            if (colorIndex === -1) 
                state.colors.push(payload.color);
            else
                state.colors.splice(colorIndex, 1);
        }
    }
})

export const { set_filter_status,set_filter_color } = filterSlice.actions;
export default filterSlice.reducer;