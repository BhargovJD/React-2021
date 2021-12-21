import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

export default class TodoList extends Component {
    constructor(props){
        super();
        this.state = {todos:[
            // {task:"walk the fish"},
            // {task:"Groom Chicken"}
        ]};

        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);

    }

    create(newTodo){
        this.setState({
            todos:[...this.state.todos, newTodo]
        })
    }

    remove(id){
        this.setState({
            todos:this.state.todos.filter(t=>t.id !== id)
        });
    }

    // Edit/Update

    update(id,updatedTask){
        const updatedTodos = this.state.todos.map(todo =>{
            if(todo.id === id){
                return{...todo,task:updatedTask};
            }
            return todo;
        });
        this.setState({todos:updatedTodos});
    }

    toggleCompletion(id){
        const updatedTodos = this.state.todos.map(todo =>{
            if(todo.id === id){
                return{...todo,completed:!todo.completed};
            }
            return todo;
        });
        this.setState({todos:updatedTodos});
    }


    render() {

        const todos = this.state.todos.map(todo=>{
            return <Todo key={todo.id} task={todo.task} removeTodo={this.remove} id={todo.id} updatedTodo={this.update} completed={todo.completed} toggleCompletion={this.toggleCompletion}/>
        })
        return (

            <div>
                <h1>Todo List!</h1>
                <NewTodoForm createTodo={this.create}/>
                <ul>
                    {todos}
                </ul>
            </div>
        )
    }
}
