import React, { Component } from "react";
import './design/App.css';
import Header from './components/Header.js';
import EditSide from './components/EditSide.js';
import PreviewSide from './components/PreviewSide.js';


class App extends Component {

  render() {
    return (
      <div className="App">
          <Header />
          <EditSide />
          {/* <PreviewSide /> */}
      </div>
      );  
    }
}

export default App;