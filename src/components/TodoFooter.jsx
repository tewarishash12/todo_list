import React from 'react'
import { colors } from './Colors'
import { useDispatch, useSelector } from 'react-redux'
import { mark_all_completed, clear_all_completed } from '../slices/todoSlice';

function TodoFooter() {
    const todos = useSelector(state => state.todo.todoList)
    const dispatch = useDispatch();

    function markCompleted(){
        dispatch(mark_all_completed(todos));
    }

    function clearCompleted(){
        dispatch(clear_all_completed(todos));
    }
    return (
        <footer className="flex justify-around items-start p-4 border-t bg-white w-full">
            
            <div className="flex flex-col space-y-2">
                <h1 className="font-bold text-sm text-gray-600">Actions</h1>
                <button
                onClick={()=>markCompleted()}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800 no-underline">
                    Mark All Completed
                </button>
                <button 
                onClick={()=>clearCompleted()}
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800 no-underline">
                    Clear All Marked
                </button>
            </div>

            <div className="flex flex-col items-start space-y-2">
                <h1 className="font-bold text-sm text-gray-600">Remaining Todos</h1>
                <p className="text-gray-700">1 item left</p>
            </div>

            <div className="flex flex-col items-start space-y-2">
                <h1 className="font-bold text-sm text-gray-600">Filter by Status</h1>
                <button className="text-gray-600 hover:text-gray-800 no-underline">All</button>
                <button className="text-gray-600 hover:text-gray-800 no-underline">Active</button>
                <button className="text-gray-600 hover:text-gray-800 no-underline">Completed</button>
            </div>

            <div className="flex flex-col items-start space-y-2">
                <h1 className="font-bold text-sm text-gray-600">Filter by Color</h1>
                <div className="flex items-start flex-col">
                    {colors.map((color) => (
                        <div key={color} className="flex items-center space-x-1">
                            <input
                                type="checkbox"
                                id={color}
                                className="cursor-pointer"
                            />
                            <div
                                className="w-4 h-2 rounded"
                                style={{ backgroundColor: color.toLowerCase() }}
                            ></div>
                            <label
                                htmlFor={color}
                                className="text-gray-600 capitalize cursor-pointer no-underline"
                            >
                                {color}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default TodoFooter