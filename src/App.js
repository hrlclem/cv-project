import React, { Component } from "react";
import './design/App.css';
import Header from './components/Header.js';
import EditSide from './components/EditSide.js';
// import PreviewSide from './components/PreviewSide.js';
// import data from './data.js';


class App extends Component {

  render() {
    return (
      <div className="App">
          <Header />
          <EditSide />
      </div>
      );  
    }
}

export default App;