import React, { Component } from 'react'
import AddTaskForm from './AddTaskForm'
import Todo from './Todo';

export default class TodoList extends Component {
    constructor(props){
        super();

        this.state={
            todos:[]
        };
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

    update(id, updatedTask){
        const updatedTodos = this.state.todos.map(todo =>{
            if(todo.id==id){
                return {...todo, task:updatedTask};
            }
            return todo;
        });
        this.setState({todos:updatedTodos})
    }

    toggleCompletion(id){
        const updatedTodos = this.state.todos.map(todo =>{
            if(todo.id==id){
                return {...todo, completed:!todo.completed};
            }
            return todo;
        });
        this.setState({todos:updatedTodos})
    }

    render() {

        const todos = this.state.todos.map(todo=>{
            return <Todo key={todo.id} task={todo.task} id={todo.id} removeTodo={this.remove} updatedTodo={this.update} completed={todo.completed} toggleCompletion={this.toggleCompletion} />
        })
        return (
            <div>
                <h1>My_TodoList</h1>
                <AddTaskForm createTodo={this.create}/>
               <br/>
                <ul class="list-group">
                   {todos}
                </ul>
            </div>
        )
    }
}
