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
        mark_as_completed: (state) => {
            state.todoList = state.todoList.map(todos => ({ ...todos, completed: true }))
        },
        clear_all_marked: (state) => {
            state.todoList = state.todoList.filter(todos => !todos.complete)
        },
    }
})

export const { marked_as_completed, clear_all_marked, toggle_marked } = filterSlice.actions;
export default filterSlice.reducer;