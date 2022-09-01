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
        }
      ]
  };
};

// Manage all inputs
    handleChange = e => {
      console.log(1)

      if (
        ["titleWork", "companyWork", "startWork", "endWork", "descriptionWork"].includes(
          e.target.name
        )
      ) {
        let workExpArray = [...this.state.workExpArray];
        workExpArray[e.target.dataset.id][e.target.name] = e.target.value;
      } else {
        this.setState({ [e.target.name]: e.target.value });
      }

      console.log(this.state)
    };


// Add new workFields
    addNewFields = e => {
      console.log(2)

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
          }
        ]
      }));
    };

      deleteInputs = index => {
        this.setState({
          workExpArray: this.state.workExpArray.filter(
            (s, sindex) => index !== sindex
          )
        });
      };

      clickOnDelete(record) {
        this.setState({
          workExpArray: this.state.workExpArray.filter(r => r !== record)
        });
      }


  render() {

    let {workExpArray} = this.state;

    return (

      <div className="workExpDiv">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
              <div className="container">
                  < CreateWorkExp
                    add={this.addNewFields}
                    delete={this.clickOnDelete.bind(this)}
                    workExpArray={workExpArray}
                  />
              </div>
        </form>
      </div>

    )
  }
}


export default WorkExp;