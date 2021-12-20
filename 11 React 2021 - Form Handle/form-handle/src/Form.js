import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state = {name:"",qty:""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addItemFunction(this.state);

        // Reset state
        this.setState({name:"", qty:""})
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input id='name' name='name' value={this.state.name} onChange={this.handleChange}/>

                <label htmlFor='qty'>Qunatity:</label>
                <input id='qty' name='qty' value={this.state.qty} onChange={this.handleChange}/>

                <button>Add item</button>
            </form>
        )
    }
}
