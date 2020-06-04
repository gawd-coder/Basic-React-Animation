import React from 'react';
import Header from "../shared/components/layout/Header"
import Footer from "../shared/components/layout/Footer"
import Timer from "./Pomodro/Timer"
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Header  title = "Welcome to CodeJobs"/>
        <Timer />
        <Footer />
      </div>
    );
  }
}

export default App;
