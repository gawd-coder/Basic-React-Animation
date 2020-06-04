import React from 'react';
import Header from "../shared/components/layout/Header"
import Footer from "../shared/components/layout/Footer"
import Content from "../shared/components/layout/Content"
import Notes from "./Notes/Notes"
//our custom data
import{notes1, notes2} from "./Notes/data"
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    //first time we load the notes1
    this.state = {
      notes: notes1
    }
  }

  componentDidMount(){
    //After 4 seconds we concatenate our data with notes2
    setTimeout(() => {
      this.setState({
        notes: [...this.state.notes, ...notes2]
      })
    },4000)
  }

  render(){
    return (
      <div className="App">
        <Header  title = "Notes"/>
        <Content>
          <Notes notes = {this.state.notes} />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
