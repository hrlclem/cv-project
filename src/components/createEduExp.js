import React, { Component } from "react";



class AddEduExp extends Component {

  render() {
    return (
      <div className="workExpTitle">
        <label htmlFor="workExpInput" placeholder="Title"></label>
        <input 
          className="workExpInput" 
          name="title"
        />
      </div>
    )
  }
}

export default AddEduExp;