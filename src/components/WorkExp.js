import React, { Component } from "react";
import PreviewSide from '../components/PreviewSide.js';



class WorkExp extends Component {

  idExp = 0;

  addWorkExp = () => {
    console.log("33")
    return {
      // <div> {Hello, world!} </div>
    }
  }


  render() {
    return (
      <div className="workExpDiv">
          <div className="workExpTitle" id={this.idExp}>
            <label htmlFor="workExpInput" placeholder="Title"></label>
            <input 
              className="workExpInput" 
              name="title"
              // value={this.state.address || ''}
              // onChange={this.addressChange.bind(this)}
              id={this.idExp}
            />
            {/* {id !== 0 && 
              <button> delete </button>
            } */}
          </div>
          
          <button className="addBtn" onClick={this.addWorkExp}>Add</button>
      </div>
      

    )
  }
}

export default WorkExp;