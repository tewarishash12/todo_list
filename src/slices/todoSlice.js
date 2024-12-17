import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"add",
    initialState : {
        todoList: [
            {
                id: nanoid(),
                task: 'Buy Milk',
                completed: false,
                color: '',
            },
            {
                id: nanoid(),
                task: 'Buy Veggies',
                completed: false,
                color: '',
            },
            {
                id: nanoid(),
                task: 'Buy Fruits',
                completed: false,
                color: '',
            },
        ],
    },
    reducers:{
        add_todo: (state,{payload}) => {
            state.todoList.push({id:nanoid(), ...payload})
        },
        remove_todo: (state, { payload }) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== payload);
        },
        toggle_marked: (state, { payload }) => {
            state.todoList = state.todoList.map((todo) => todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo);
        },
        toggle_all: (state, {payload})=>{
            state.todoList = state.todoList.map(todo=>{ return {...todo, completed: payload }})
        },
        update_todo_color: (state, { payload }) => {
            const { id, color } = payload;
            state.todoList = state.todoList.map((todo) =>
                todo.id === id ? { ...todo, color } : todo
            );
        }
    }
})

export const { add_todo, remove_todo, toggle_marked, toggle_all, update_todo_color } = todoSlice.actions;
export default todoSlice.reducer