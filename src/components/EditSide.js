import React, { Component } from "react";
import PersoDetails from '../components/PersonalDetails.js';
import EducationExp from '../components/EducationExp.js';
import WorkExp from '../components/WorkExp.js';



class EditSide extends Component {
  render() {
    return (
        <div className="editSide">
            <div className="sectionTitle">PERSONAL DETAILS</div>
            <PersoDetails />

            <div className="sectionTitle">WORK EXPERIENCE</div>
            <WorkExp />

            <div className="sectionTitle">EDUCATION</div>
            <EducationExp />
        </div>
      );  
    }
}

export default EditSide;