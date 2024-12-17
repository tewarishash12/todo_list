import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"add",
    initialState : {
        todoList: [
            {
                id: nanoid(),
                task: 'Buy Milk',
                completed: false,
                color: 'red',
            },
            {
                id: nanoid(),
                task: 'Buy Veggies',
                completed: false,
                color: 'blue',
            },
            {
                id: nanoid(),
                task: 'Buy Fruits',
                completed: false,
                color: 'green',
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
            state.todoList = state.todoList.map((todo) => todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo);
        },
        toggle_all: (state, {payload})=>{
            state.todoList = state.todoList.map(todo=>{ return {...todo, completed: payload }})
        }
    }
})

export const { add_todo, remove_todo, toggle_marked, toggle_all, filter_all, filter_completed, filter_incompleted} = todoSlice.actions;
export default todoSlice.reducer