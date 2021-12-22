import React, { Component } from 'react'
import './Todo';

export default class Todo extends Component {
    constructor(props){
        super(props);

        this.state = {
            isEditing:false,
            task:this.props.task
        };

        this.handelRemove = this.handelRemove.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handelUpdate = this.handelUpdate.bind(this);
        this.handleToggle = this.handelUpdate.bind(this);


    }

    handelRemove(){
        this.props.removeTodo(this.props.id)
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handelUpdate(e){
        e.preventDefault();
        this.props.updatedTodo(this.props.id, this.state.task);
        this.setState({isEditing:false});
    }

    toggleForm(){
        this.setState({isEditing : !this.state.isEditing})
    }
    handelUpdate(e){
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
            result =(
                <div>
                    <form onSubmit={this.handelUpdate}>
                        <div class="mb-3">
                        <input type="text" class="form-control" id="task" name="task" value={this.state.task} onChange={this.handleChange}/>
                        </div>
                        <button class="btn btn-warning">Update</button>
                </form>
                </div>
            );
        }
         else { result= (
            <div>
                <br/>
                <li className={this.props.completed ? "Completed":""} onClick={this.handleToggle} class="list-group-item">{this.props.task}</li>

                <button onClick={this.toggleForm} type="button" class="btn btn-primary">Edit</button>
                <button onClick={this.handelRemove} type="button" class="btn btn-danger">Delete</button>

            </div>
        );
    }
    return result;
}
}
