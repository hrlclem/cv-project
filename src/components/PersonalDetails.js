import React, { Component } from "react";
import PreviewSide from '../components/PreviewSide.js';




class PersoDetails extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: 'testName',
      address: 'testAddress',
      mail: 'testMail',
      number: 'testNumber',
      linkedin: 'testLkd',
      otherLink: 'testOther',
      description: 'testDescription'
    }
  }

    nameChange = (e) => this.setState(prevState =>{
        return {
          ...prevState, 
          name: e.target.value,
        }
      }
    );
    


  render() {
    const perso = this.state;

    return (

      
      <div className='personalDetailsDiv'>

        <PreviewSide 
                  name= {perso.name}
                  // address= {perso.address}
                  // mail= {perso.mail}
                  // number= {perso.number}
                  // linkedin= {perso.linkedin}
                  // otherLink= {perso.otherLink}
                  // description= {perso.description}
        />  


        <div className="nameDiv">
          <label htmlFor="nameInput">Name</label>
          <input 
            className="nameInput" 
            name="name"
            value={this.state.name || ''}
            onChange={this.nameChange.bind(this)}
            id="nameInput"
          />
        </div>
      </div>
    
    )
  }
}

export default PersoDetails;