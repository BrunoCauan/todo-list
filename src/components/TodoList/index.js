import React from "react";
import "./styles.css";

import TodoItem from './../TodoItem';

class TodoList extends React.Component {
    render() {
        const { checked, todos, handleTodoChange, handleTodoRemove } = this.props;

        return (
            <ul>
                {todos.map((todo, index) => (
                    todo.checked === checked &&
                    
                    <TodoItem 
                        key={index} 
                        index={index} 
                        todo={todo} 
                        handleTodoChange={handleTodoChange}
                        handleTodoRemove={handleTodoRemove}
                    />
                ))}
            </ul>
        );
    }
}

export default TodoList;
