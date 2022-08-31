import React, { Component } from "react";
import PreviewSide from '../components/PreviewSide.js';
import data from '../data.js';




class PersoDetails extends Component {


    nameChange = (e) => data.intro.name = e.target.value;
    addressChange = (e) => data.intro.address = e.target.value;


  render() {

    return (
      
      <div className='personalDetailsDiv'>

        <div className="nameDiv">
          <label htmlFor="nameInput">Name</label>
          <input 
            className="nameInput" 
            name="name"
            defaultValue= {data.intro.name || ''}
            // value={data.intro.name || ''}
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
            // value={data.intro.address || ''}
            onChange={this.addressChange.bind(this)}
            id="addressInput"
          />
        </div>


        <PreviewSide 
                  name= {data.intro.name}
                  address= {data.intro.address}
                  // mail= {perso.mail}
                  // number= {perso.number}
                  // linkedin= {perso.linkedin}
                  // otherLink= {perso.otherLink}
                  // description= {perso.description}
        />  

      </div>
    )
  }
}

export default PersoDetails;