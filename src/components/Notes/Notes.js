//we are going to simulate notes update after every 4 second
import React, { Component } from 'react'
import moment from 'moment';
import "./Notes.css"

const formatTime = "YYYY-MM-DD HH:mm:ss";

export default class Notes extends Component {
    constructor(){
        super();
        //saving the first date when data is rendered at the beginning
        this.state = {
            lastUpdate: moment().format(formatTime).toString()
        }
    }

    //called before rendering, called whenever new props are passed to the component/state has changed
    componentWillReceiveProps(nextProps){
        //if prop notes have changed
        if(nextProps.notes !== this.props.notes){
            this.setState({
                lastUpdate: moment().format(formatTime).toString() 
            })
        }
    }

    render() {
        
        const {notes} = this.props;
        return (
            <div className = "Notes">
                <h1>Notes: </h1>

                <ul>
                    {notes.map((note,key) => (
                        <li key = {key}>{note.title} - {note.content}</li>
                    ))}
                </ul>
                <p>Last update: <strong>{this.state.lastUpdate}</strong></p>
            </div>
        )
    }
}
