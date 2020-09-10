import React from "react";
import "./styles.css";

import TodoList from './../TodoList';
import Undo from './../Undo';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            todos: [],
            undo: undefined
        };

        this.handleTodoChange = this.handleTodoChange.bind(this);
        this.handleTodoRemove = this.handleTodoRemove.bind(this);
        this.handleUndoTodoRemove = this.handleUndoTodoRemove.bind(this);
    }

    componentDidMount() {
        const storagedTodos = localStorage.getItem('todos');
        
        if (storagedTodos) {
            this.setState({ todos: JSON.parse(storagedTodos) });
        }
    }

    componentDidUpdate() {
        localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }

    handleAddTodo(e) {
        if (e.key === "Enter") {
            const { todos } = this.state,
                newTodo = e.target.value.trim();

            if (newTodo) {
                todos.push({ name: newTodo, checked: false, completed: false });
                this.setState({ todos, undo: undefined });
                
                e.target.value = '';
            }
        }
    }

    handleTodoChange(todo, index) {
        const { todos } = this.state;

        todos[index] = todo;
        this.setState({ todos, undo: undefined });
    }
    
    handleTodoRemove(index) {
        const { todos } = this.state;
        const undo = todos[index];

        todos.splice(index, 1);
        this.setState({ todos, undo, });
    }

    handleUndoTodoRemove() {
        const { todos, undo } = this.state;
        
        todos.push(undo);
        this.setState({ todos, undo: undefined });
    }

    render() {
        const { todos, undo } = this.state;

        return (
            <div className="main">
                <div className="container">
                    <div className="card">
                        <h1>Todo List</h1>

                        <input
                            className="input"
                            type="text"
                            placeholder="What needs to be done?"
                            onKeyDown={(e) => { this.handleAddTodo(e) }}
                        />

                        
                        <ul>
                            <TodoList
                                checked={false} 
                                todos={todos} 
                                handleTodoChange={this.handleTodoChange}
                                handleTodoRemove={this.handleTodoRemove}
                            />
                            
                            <TodoList
                                checked={true}
                                todos={todos} 
                                handleTodoChange={this.handleTodoChange}
                                handleTodoRemove={this.handleTodoRemove}
                            />
                        </ul>

                        <Undo 
                            undo={undo}
                            handleUndoTodoRemove={this.handleUndoTodoRemove}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
