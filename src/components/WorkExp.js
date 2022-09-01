import React, { Component } from "react";
import CreateWorkExp from './createWorkExp.js';
import data from '../data.js';



class WorkExp extends Component {

  constructor() {
    super();

    this.state = {  
      workExpArray: [
        {
          index: Math.random(),
          titleWork: '',
          companyWork: '',
          startWork: '',
          endWork: '',
          descriptionWork: '',
          submitted: false,
        }
      ]
  };
};

// Manage all inputs
    handleChange = e => {
      let workExp = [...this.state.workExpArray];
      if (
        ["titleWork", "companyWork", "startWork", "endWork", "descriptionWork"].includes(
          e.target.name
        )
      ) {
        workExp[e.target.dataset.id][e.target.name] = e.target.value;
      } else {
        this.setState({ [e.target.name]: e.target.value });
      }
    };


// Add new workFields
    addNewFields = e => {
      this.setState(prevState => ({
        workExpArray: [
          ...prevState.workExpArray,
          {
            index: Math.random(),
            titleWork: '',
            companyWork: '',
            startWork: '',
            endWork: '',
            descriptionWork: '',
            submitted: false,
          }
        ]
      }));
    };

  // Delete fields
      deleteInputs = index => {
        this.setState({
          workExpArray: this.state.workExpArray.filter(
            (s, sindex) => index !== sindex
          )
        });
      };

      clickOnDelete = record => {
        this.setState({
          workExpArray: this.state.workExpArray.filter(r => r !== record)
        });
      }

  // Submit input values for display
      displayInput = e => {
        // e.preventDefault();    <=== THIS IS THE ISSUE
        let workExp = [...this.state.workExpArray]
        console.log(workExp);
        workExp.push(data.workingExp);
        console.log(data);
        return false;
      }

  render() {

    let {workExpArray} = this.state;

    return (

      <div className="workExpDiv">
        <form onSubmit={this.displayInput} onChange={this.handleChange}>
              <div className="container">
                  <CreateWorkExp
                    add={this.addNewFields}
                    delete={this.clickOnDelete.bind(this)}
                    displayInput={this.displayInput.bind(this)}
                    workExpArray={workExpArray}
                  />
              </div>
        </form>
      </div>

    )
  }
}


export default WorkExp;