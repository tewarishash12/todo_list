import React from 'react'
import { colors } from './Colors'
import { useDispatch, useSelector } from 'react-redux'
import { toggle_all } from '../slices/todoSlice';
import {set_filter_status, set_filter_color} from "../slices/filterSlice"

function TodoFooter() {
    const todoCompleted = useSelector(state => state.todo.todoList.filter(todo=> !todo.completed))
    const selectedColors = useSelector(state=> state.filter.colors)

    const dispatch = useDispatch();

    function toggleAllMarked(value) {
        dispatch(toggle_all({completed:value}));
    }

    function filterByStatus(status) {
        dispatch(set_filter_status({status:status}));
    }

    function toggleColorFilter(color){
        dispatch(set_filter_color({color:color}))
    }

    return (
        <footer className="flex justify-around items-start p-4 border-t bg-white w-full">

            <div className="flex flex-col space-y-2">
                <h1 className="font-bold text-sm text-gray-600">Actions</h1>
                <button
                    onClick={() => toggleAllMarked(true)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800 no-underline">
                    Mark All Completed
                </button>
                <button
                    onClick={() => toggleAllMarked(false)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800 no-underline">
                    Clear All Marked
                </button>
            </div>

            <div className="flex flex-col items-start space-y-2">
                <h1 className="font-bold text-sm text-gray-600">Remaining Todos</h1>
                <p className="text-gray-700">{todoCompleted.length} task{todoCompleted.length !== 1 ? 's' : ''} left</p>
            </div>

            <div className="flex flex-col items-start space-y-2">
                <h1 className="font-bold text-sm text-gray-600">Filter by Status</h1>
                <button
                    value="All"
                    onClick={() => filterByStatus('all')}
                    className="text-gray-600 hover:text-gray-800 no-underline"
                >All
                </button>
                <button
                    className="text-gray-600 hover:text-gray-800 no-underline"
                    value="Active"
                    onClick={() => filterByStatus('active')}
                >Active
                </button>
                <button
                    className="text-gray-600 hover:text-gray-800 no-underline"
                    value="Completed"
                    onClick={()=>filterByStatus('completed')}
                >Completed
                </button>
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
                                checked={selectedColors.includes(color)}
                                onChange={()=>toggleColorFilter(color)}
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