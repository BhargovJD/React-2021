import React, { Component } from 'react'
import Form from './Form';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
export default class ShoppingList extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[
                {name:"Milk", qty:"2 gallons",id:uuidv4()},
                {name:"Bread", qty:"1 packet",id:uuidv4()}
            ]
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(item){
        let newItem = {...item, id:uuidv4()};
        this.setState(st=>({
            items:[...st.items, newItem]
        }));
    }

    renderItems(){
        return(
            <ul>
                {
                    this.state.items.map(item => (
                        <li key={item.id}>
                            {item.name}:{item.qty}
                        </li>
                    ))
                }
            </ul>
        );
    }


    render() {
        return (
            <div>
                <h1>Shopping List</h1>
                {this.renderItems()}
                <Form addItemFunction = {this.addItem}/>
            </div>
        )
    }
}
