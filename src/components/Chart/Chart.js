import React, { Component } from 'react'
import c3 from "c3";
import "./Chart.css"

export default class Chart extends Component {
    //when component mounts the first time we update chart
    componentDidMount(){    
        this.updateChart();
    }

    //every time when we receive a new prop from App.js, we update the chart again
    componentDidUpdate(){
        this.updateChart();
    }

    updateChart(){
        c3.generate({
            bindto: "#chart",
            data: {
                columns: this.props.columns,
                type: this.props.chartType
            }
        })
    }

    render() {
        return (
            <div id = "chart" />
        )
    }
}
