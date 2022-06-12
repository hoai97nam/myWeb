// create increase & decrease buttons
// to practice state

import { Component } from "react";

export class ButtonState extends Component {
    constructor(props){
        super(props);
        this.state={val: 0};
        this.handleDecrease = this.handleDecrease.bind(this);
        this.handleIncrease = this.handleIncrease.bind(this);
    }
    handleIncrease(){
        this.setState({val: this.state.val + 1})
    }
    handleDecrease(){
        this.setState({val: this.state.val - 1})
    }
    render(){
        return (
          <>
            <div>{this.state.val}</div>
            <button onClick={this.handleIncrease}>In</button>
            <button onClick={this.handleDecrease}>De</button>
          </>  
        );
    }
}