import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"add",
    initialState:{
        todoList: [
        {
            id: nanoid(),
            task: 'Buy Milk',
            complete: false
        },
        {
            id: nanoid(),
            task: 'Buy Veggies',
            complete: false
        },
        {
            id: nanoid(),
            task: 'Buy Fruits',
            complete: false
        },
    ]
    },
    reducers:{
        add_todo: (state,{type,payload}) => {
            state.todoList.push({id:nanoid(), ...payload})
        },
        remove_todo: (state,{type,payload}) => {
            state.todoList = state.todoList.filter((todo)=> todo.id!==payload.id)
        }
    }
})

export const { add_todo, remove_todo} = todoSlice.actions;
export default todoSlice.reducer