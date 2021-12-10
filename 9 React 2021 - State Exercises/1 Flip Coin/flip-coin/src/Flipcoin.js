import React, { Component } from 'react';
import HEAD from './HEAD.jpg';
import TAIL from './TAIL.jpg'
import './Coin.css';


export default class Flipcoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            side: HEAD,
            alt: "head-side",
            headScore: 0,
            tailScore: 0,
        };

        this.randomChange = this.randomChange.bind(this);
        this.incrementHeadScore = this.incrementHeadScore.bind(this);
        this.incrementTailScore = this.incrementTailScore.bind(this);

    }


    incrementTailScore(curState) {
        return {
            tailScore: curState.tailScore + 1
        };
    }

    incrementHeadScore(curState) {
        return {
            headScore: curState.headScore + 1
        };
    }


    randomChange() {
        var n = Math.floor(Math.random() * 2);
        // console.log(n)

        // tail
        if (n === 0) {
            console.log('This is 0: Tail');
            this.setState({ side: TAIL });
            this.setState({ alt: "tail-side" });

            this.setState(this.incrementTailScore);



        }

        // head
        if (n === 1) {
            console.log('This is 1: Head');
            this.setState({ side: HEAD });
            this.setState({ alt: "head-side" });

            this.setState(this.incrementHeadScore);
        }
    }





    render() {

        console.log(this.state.side);
        return (
            <div>
                <img className="Coin" src={this.state.side} alt={this.state.alt} />
                <br />
                <button onClick={this.randomChange}>Flip Coin</button>
                <br />
                <h3>Head Score: {this.state.headScore}</h3>
                <h3>Tail Score: {this.state.tailScore}</h3>
            </div>
        )
    }
}
