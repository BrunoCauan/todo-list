import React from "react";
import "./styles.css";

import { ReactComponent as Remove } from './../../assets/remove.svg';
import { ReactComponent as Checked } from './../../assets/checked.svg';

class TodoItem extends React.Component {
    handleNameChange(e) {
        const { index, todo, handleTodoChange } = this.props,
            newValue = e.target.value.trim();

        if (newValue) {
            todo.name = newValue;
            handleTodoChange(todo, index);
        } else {
            e.target.value = todo.name;
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

    triggerBlur(e) {
        if (e.key === "Enter") {
            e.target.blur();
        }
    }
    
    render() {
        const { todo } = this.props;

        return (
            <li className="todo-item">
                <button 
                    className="checkbox" 
                    data-checked={todo.checked}
                    onClick={() => this.handleChecked()}
                >
                    <Checked />
                </button>
                
                <input
                    className="input"
                    defaultValue={todo.name}
                    suppressContentEditableWarning={true}
                    onBlur={(e) => this.handleNameChange(e)}
                    onKeyDown={(e) => this.triggerBlur(e)}
                >
                </input>
                
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
