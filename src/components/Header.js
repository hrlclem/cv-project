import React, { Component } from "react";




class Header extends Component {
  render() {
    return (
      <div className="appHeader">
        <div className="headerTitle">My CV</div>
        <div className="headerTitle2">App</div>
        <button className="exportBtn">Export CV</button>
      </div>
    );
  }
}


export default Header;
