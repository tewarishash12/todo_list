import React from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import TodoFooter from '../components/TodoFooter'

export default function TodoPage() {
    

    return (
        <>
            <h1 className="text-3xl text-orange-800 font-bold underline">Todos</h1>
            <TodoForm />
            <TodoList />
            <TodoFooter />
        </>
    )
}
