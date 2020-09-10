import React from "react";
import "./styles.css";

import { ReactComponent as Remove } from './../../assets/remove.svg';
import { ReactComponent as Checked } from './../../assets/checked.svg';

class TodoItem extends React.Component {
    handleNameChange(e) {
        const { index, todo, handleTodoChange } = this.props,
            newValue = e.target.textContent.trim();

        if (newValue) {
            todo.name = newValue;
            handleTodoChange(todo, index);
        } else {
            e.target.textContent = todo.name;
        }
    }
    
    handleChecked() {
        const { index, todo, handleTodoChange } = this.props;

        todo.checked = !todo.checked;
        handleTodoChange(todo, index);
    }
    
    handleRemove() {
        const { index, handleTodoRemove } = this.props;

        handleTodoRemove(index);
    }
    
    render() {
        const { todo, triggerBlur } = this.props;

        return (
            <li className="todo-item">
                <button 
                    className="checkbox" 
                    data-checked={todo.checked}
                    onClick={() => this.handleChecked()}
                >
                    <Checked />
                </button>
                
                <span
                    className="input"
                    contentEditable={!todo.checked}
                    suppressContentEditableWarning={true}
                    onBlur={(e) => this.handleNameChange(e)}
                    onKeyDown={(e) => triggerBlur(e)}
                >
                    {todo.name}
                </span>
                
                <button 
                    className="remove"
                    onClick={() => this.handleRemove()}
                >
                    <Remove />
                </button>
            </li>
        );
    }
}

export default TodoItem;
