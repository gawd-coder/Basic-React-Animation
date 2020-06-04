import React from 'react';
import Animation from "./Animation/Animation"
import Header from "../shared/components/layout/Header"
import Footer from "../shared/components/layout/Footer"
import Content from "../shared/components/layout/Content"
import './App.css';

class App extends React.Component{  
  render(){
    return (
      <div className="App">
        <Header  title = "Charts"/>
        <Content>
          <Animation/>
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
