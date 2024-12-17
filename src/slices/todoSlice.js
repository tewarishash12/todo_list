import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"add",
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
    reducers:{
        add_todo: (state,{type,payload}) => {
            state.todoList.push({id:nanoid(), ...payload})
        },
        remove_todo: (state, { payload }) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== payload);
        },
        toggle_marked: (state, { payload }) => {
            console.log(payload.id)
            state.todoList = state.todoList.map((todo) => todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo);
        },        
    }
})

export const { add_todo, remove_todo, toggle_marked} = todoSlice.actions;
export default todoSlice.reducer