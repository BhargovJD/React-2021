import React, { Component } from 'react'
import {v4 as uuidv4} from 'uuid';

export default class AddTaskForm extends Component {
    constructor(props){
        super(props);
        this.state={task:""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault();
        // this.props.createTodo(this.state);
        this.props.createTodo({...this.state,id:uuidv4(),completed:false});
        this.setState({task:""});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                        <div class="mb-3">
                        <input type="text" class="form-control" id="task" name="task" value={this.state.task} onChange={this.handleChange}/>
                        </div>
                        <button type="submit" class="btn btn-success">Add</button>
                </form>
            </div>
        )
    }
}
