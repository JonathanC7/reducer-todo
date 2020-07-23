import React from 'react';
import './Todo.css';


export default function Todo ({item, completed, toggleCompleted, id}){
    const handleClick = e => {
        toggleCompleted(id);
    }
    return (
        <div 
        className={`todo${completed? ' completed' : ''}`} 
        onClick={handleClick}>
            <p>{item}</p>
        </div>
    )
}