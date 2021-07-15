import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDelete, onToggleDone, onToggleImportant}) => {

    const elements = todos.map(item => {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                <TodoListItem 
                    {... item} 
                    onDelete={() => onDelete(item.id)}
                    onToggleDone={() => onToggleDone(item.id)}
                    onToggleImportant={() => onToggleImportant(item.id)}
                />
            </li>
        )
    });

    return (
        <div>
            <ul className="list-group todo-list">
                {elements}
            </ul>
        </div>  
    )
}

export default TodoList;