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
            state.todoList = state.todoList.map((todo) => todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo);
        },
        mark_all_completed: (state)=>{
            state.todoList = state.todoList.map(todo=>{ return {...todo, completed:true }})
        },
        clear_all_completed: (state)=>{
            state.todoList = state.todoList.map(todo=>{ return {...todo, completed:false }})
        }
    }
})

export const { add_todo, remove_todo, toggle_marked, mark_all_completed, clear_all_completed} = todoSlice.actions;
export default todoSlice.reducer