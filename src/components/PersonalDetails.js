import React, { Component } from "react";
import PreviewSide from '../components/PreviewSide.js';
import data from '../data.js';




class PersoDetails extends Component {


    nameChange(e){
      data.intro.name = e.target.value;
      this.forceUpdate();
    }

    addressChange(e){
      data.intro.address = e.target.value;
      this.forceUpdate();
    }

    
  render() {
    return (
      
      <div className='personalDetailsDiv'>

        <div className="nameDiv">
          <label htmlFor="nameInput">Name</label>
          <input 
            className="nameInput" 
            name="name"
            defaultValue= {data.intro.name || ''}
            onChange={this.nameChange.bind(this)}
            id="nameInput"
          />
        </div>

        <div className="addressDiv">
          <label htmlFor="addressInput">Address</label>
          <input 
            className="addressInput" 
            name="address"
            defaultValue= {data.intro.address || ''}
            onChange={this.addressChange.bind(this)}
            id="addressInput"
          />
        </div>


        <PreviewSide 
            name= {data.intro.name}
            address= {data.intro.address}
        />  

      </div>
    )
  }
}

export default PersoDetails;