import React, { Component } from 'react'

export default class NumberItem extends Component {
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this)
    }
    handleRemove(e){
        this.props.remove(this.props.value);
    }
    render() {
        return (
            <div>

                {this.props.value}
                <button  onClick={this.handleRemove}>X</button>
            </div>
        )
    }
}
