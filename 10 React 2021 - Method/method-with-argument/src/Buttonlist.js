import React, { Component } from 'react'

export default class Buttonlist extends Component {

    static defaultProps = {
        colors :["#e056fd","#eb4d4b","#badc58","#f0932b"]
    };

    constructor(props){
        super(props);
        this.state={color:"cyan"};
        this.changeColor =this.changeColor.bind(this);


    }

    changeColor(newColor){
        this.setState({color: newColor});
    }

    render() {
        return (
            <div className="ButtonList" style={{backgroundColor:this.state.color}}>
                {this.props.colors.map(c=>{

                    const colorObj ={backgroundColor:c};
                    return <button onClick={()=>this.changeColor(c)} style={colorObj}>Click on me!</button>
                })}
            </div>
        )
    }
}
