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
        // add_todo: (state,{payload}) => {
        //     state.todoList.push({id:nanoid(), ...payload})
        // }, // id can overwrite the id if it coming as a part of payload (which is resolved in below code)
        // instead of using spread operator create a new object with each entries
        add_todo: (state,{payload}) => {
            state.todoList.push({id:nanoid(), task: payload.task, color: '', completed:false}) 
        },
        remove_todo: (state, { payload }) => {
            state.todoList = state.todoList.filter((todo) => todo.id !== payload.id);
        },
        toggle_marked: (state, { payload }) => {
            state.todoList = state.todoList.map((todo) => todo.id === payload.id ? { ...todo, completed: !todo.completed } : todo);
        },
        toggle_all: (state, {payload})=>{
            state.todoList = state.todoList.map(todo=>{ return {...todo, completed: payload.completed }})
        },
        update_todo_color: (state, { payload }) => {
            state.todoList = state.todoList.map((todo) =>
                todo.id === payload.id ? { ...todo, color:payload.color } : todo
            );
        }
    }
})

export const { add_todo, remove_todo, toggle_marked, toggle_all, update_todo_color } = todoSlice.actions;
export default todoSlice.reducer