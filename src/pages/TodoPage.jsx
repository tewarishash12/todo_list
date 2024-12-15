import React from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import TodoFooter from '../components/TodoFooter'

export default function TodoPage() {


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            {/* White Card Container */}
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
                {/* Title */}
                <h1 className="text-4xl font-bold text-center text-red-600 mb-6">Todos</h1>

                {/* Todo Form and List */}
                <div className="space-y-6">
                    <TodoForm />
                    <TodoList />
                </div>

                {/* Footer */}
                <div className="mt-6 border-t pt-4">
                    <TodoFooter />
                </div>
            </div>
        </div>
    )
}
