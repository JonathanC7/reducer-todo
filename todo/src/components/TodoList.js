import React, { useState, useReducer } from 'react';
import Todo from './Todo';

import { todoReducer, initialState } from '../reducers/index';

export default function TodoList (){
    const [newTodo, setNewTodo] = useState('')
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        setNewTodo('');
    }
    let toggleCompleted = itemId => {
        dispatch({type: 'TOGGLE_COMPLETE', payload: itemId})
    }
    let clearPurchased = itemId => {
        dispatch({type: 'CLEAR_PURCHASED', payload: itemId})
    }
    return (
        <form className='todo-list' onSubmit={handleSubmit}>
            <div className='todo-container'>
                {state.todos.map((todo) => {
                    return <Todo 
                    item={todo.item}
                    key={todo.id}
                    completed={todo.completed}
                    id={todo.id}
                    toggleCompleted={toggleCompleted} />
                })}
            </div>
            <label>
                <input 
                type='text'
                value={newTodo}
                className='todo-input'
                onChange={handleChanges}
                />
            </label>
            <button
            onClick={() => {dispatch({type:'ADD_TODO', newTodo})}}
            className='add-btn'>Add Todo</button>
            <button
            onClick={clearPurchased}
            className='clear-btn'>Clear Complete</button>
        </form>
    )
}