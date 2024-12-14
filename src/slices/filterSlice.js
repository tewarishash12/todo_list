import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:'filter',
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
        
    }
})