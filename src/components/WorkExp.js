import React, { Component } from "react";
import PreviewSide from '../components/PreviewSide.js';



class WorkExp extends Component {

  idExp = 0;

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
          </div>

          <PreviewSide 
                  title= {this.idExp}
          />  
          
      </div>
      

    )
  }
}

export default WorkExp;