import React, { Component } from 'react'
import "./Animation.css";

//creating a basic fade in/out animation
export default class Animation extends Component {
    constructor(){
        super();
        this.state = {
            show: false
        }
    }

    //componentWillUpdate allows you to manipulate a component just before it receives new props or a new state
    componentWillUpdate(newProps, newState){
        if(!newState.show){
            document.getElementById("fade").style = "opacity: 1";
        }
        else{
            document.getElementById("fade").style = "opacity: 0";
        }
    }

    toggleCollapse = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (
            <div className = "Animation">
                <button onClick = {this.toggleCollapse}>
                    {this.state.show ? "Collapse" : "Expand"}
                </button>
                <div    
                    id = "fade"
                    className = {this.state.show ? "transition show" : "transition"}
                >
                    This text will disappear
                </div>    
            </div>
        )
    }
}
