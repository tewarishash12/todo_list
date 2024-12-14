import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove_todo } from '../slices/todoSlice'
import { colors } from './Colors'
import { FaTimes } from 'react-icons/fa';

export default function TodoList() {
    const todoSet = useSelector(state => state.todo.todoList)
    const dispatch = useDispatch();


    function deleteBtn(id) {
        dispatch(remove_todo(id))
    }

    return (
        <ul className="w-full">
            {todoSet.map((todo) => {
                return (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between border-b py-2"
                    >
                        {/* Checkbox */}
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                className="w-5 h-5 text-green-500 focus:ring-0 focus:ring-offset-0 rounded-full"
                            />
                            <span className="text-gray-700 text-lg">{todo.task}</span>
                        </div>

                        <div>
                            <select
                                className="border p-1 rounded text-gray-700 focus:outline-none font-bold"
                            >
                                <option value="" selected disabled hidden>
                                    &nbsp;
                                </option>
                                {colors.map((color, index) => (
                                    <option
                                        key={index}
                                        value={color}
                                        className='font-bold'
                                        style={{color: color.toLowerCase() }}
                                    >
                                        {color}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Delete Button */}
                        <button onClick={() => deleteBtn({ id: todo.id })}>
                            <FaTimes size={20} className="text-red-500 hover:text-red-800" />
                        </button>
                    </li>
                );
            })}
        </ul>

    )
}
