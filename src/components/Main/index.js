import React from "react";
import "./styles.css";

import TodoItem from './../TodoItem';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            todos: []
        };

        this.handleTodoChange = this.handleTodoChange.bind(this);
        this.handleTodoRemove = this.handleTodoRemove.bind(this);
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
        const { todos } = this.state,
            newTodo = e.target.value.trim();

        if (newTodo) {
            todos.push({ name: newTodo, checked: false, completed: false });
            this.setState({ todos });
            
            e.target.value = '';
        }
    }

    triggerBlur(e) {
        if (e.key === "Enter") {
            e.target.blur();
        }
    }

    handleTodoChange(todo, index) {
        const { todos } = this.state;

        todos[index] = todo;
        this.setState({ todos, });
    }
    
    handleTodoRemove(index) {
        const { todos } = this.state;

        todos.splice(index, 1);
        this.setState({ todos, });
    }

    render() {
        const { todos } = this.state;

        return (
            <div className="main">
                <div className="container">
                    <div className="card">
                        <h1>Todo List</h1>

                        <input
                            className="input"
                            type="text"
                            placeholder="What needs to be done?"
                            onBlur={(e) => { this.handleAddTodo(e) }}
                            onKeyDown={(e) => { this.triggerBlur(e) }}
                        />

                        <ul>
                            {todos.map((todo, index) => (
                                <TodoItem 
                                    key={index} 
                                    index={index} 
                                    todo={todo} 
                                    triggerBlur={this.triggerBlur}
                                    handleTodoChange={this.handleTodoChange}
                                    handleTodoRemove={this.handleTodoRemove}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
