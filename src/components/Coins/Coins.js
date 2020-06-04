import React, { Component } from 'react'
import "./Coins.css"

export default class Coins extends Component {
    constructor(){
        super();
        this.state = {
            dollars: 0
        }
    }

    //return value should be a boolean
    shouldComponentUpdate(props,state){
        //Only update if dollars are multiples of 10
        return state.dollars % 10 === 0;
    }

    handleOnChange = e => {
        this.setState({
            dollars: Number(e.target.value || 0)
        })
    }

    render() {
        return (
            <div className = "Coins">
                <h1>Buy Crypto Coins!</h1>
                <div className = "question">
                    <p>How much dollars you have?</p>
                    <p>
                        <input
                            placeholder = "0"
                            onChange = {this.handleOnChange}
                            type = "text"
                        />    
                    </p>
                </div>
                <div className = "answer">
                    <p>Crypto Coins price: $10</p>
                    <p>You can buy <strong>{this.state.dollars/10}</strong>Coins</p>
                </div>
            </div>
        )
    }
}
