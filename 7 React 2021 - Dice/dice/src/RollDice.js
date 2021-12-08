import React, { Component } from 'react'
import Dice from './Dice'

export default class RollDice extends Component {
    static defaultProps = {
        sides :["one","two","three","four","five","six"]
    };
    constructor(props){
        super(props);
        this.state = {
            dice1 : "one",
            dice2 : "two",
            rolling: false
        };
        this.roll = this.roll.bind(this);
    }

    roll(){
        const newDice1 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];

        const newDice2 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];

        this.setState({dice1:newDice1,dice2:newDice2, rolling:true});

        // Wait 1sec, then set rolling to false
        setTimeout(()=>{
            this.setState({rolling:false})
        },1000);}



    render() {
        return (
            <div>
                <Dice face={this.state.dice1}/>
                <Dice face={this.state.dice2}/>
                <br/>
                <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling ? "Rolling..." : "Roll Dice!"}</button>
            </div>
        )
    }
}
