import React, { Component } from 'react'
import './Todo.css';

export default class Todo extends Component {

    constructor(props){
        super(props);
        this.state = {
            isEditing : false,
            task:this.props.task
        };
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleToggle = this.handleToggle.bind(this);

    }


    // remove
    handleRemove(){
        this.props.removeTodo(this.props.id);
    }

    // edit
    toggleForm(){
        this.setState({isEditing: !this.state.isEditing});
    }



    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleUpdate(e){
        e.preventDefault();
        this.props.updatedTodo(this.props.id, this.state.task);
        this.setState({isEditing:false});
    }

    handleToggle(e){
        this.props.toggleCompletion(this.props.id);

    }


    render() {
        let result;
        if(this.state.isEditing){
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.task} name='task'onChange={this.handleChange} ></input>
                        <button>Save</button>
                    </form>
                </div>
            );
        }

        else { result= (
            <div>
            <button onClick={this.toggleForm}>Edit</button>
            <button onClick={this.handleRemove}>X</button>
            <li className={this.props.completed ? 'Completed':""} onClick={this.handleToggle}>{this.props.task}</li>
            <hr/>
        </div>
        );
        }

        return result;
    }
}
