import { createSlice,nanoid } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState : {
        todoList: [
            {
                id: nanoid(),
                task: 'Buy Milk',
                completed: false,
            },
            {
                id: nanoid(),
                task: 'Buy Veggies',
                completed: false,
            },
            {
                id: nanoid(),
                task: 'Buy Fruits',
                completed: false,
            },
        ],
    },
    reducers: {
        
    }
})

export const { marked_as_completed, clear_all_marked } = filterSlice.actions;
export default filterSlice.reducer;