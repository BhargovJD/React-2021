import React, { Component } from 'react';
import HEAD from './HEAD.jpg';
import TAIL from './TAIL.jpg'
import './Coin.css';


export default class Flipcoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            side: HEAD,
            alt: "head-side"
        };

        this.changeCoin = this.changeCoin.bind(this);

    }

    changeCoin(e) {
        if (this.state.side === HEAD) {
            this.setState({ side: TAIL });
            this.setState({ alt: "tail-side" });
        }

        if (this.state.side === TAIL) {
            this.setState({ side: HEAD });
            this.setState({ alt: "head-side" });
        }

    }
    render() {

        console.log(this.state.side);
        return (
            <div>
                <img className="Coin" src={this.state.side} alt={this.state.alt} />
                <br />
                <button onClick={this.changeCoin}>Flip Coin</button>
            </div>
        )
    }
}
