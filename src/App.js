import React, { Component } from "react";
import './design/App.css';
import Header from './components/Header.js';
import EditSide from './components/EditSide.js';
import PreviewSide from './components/PreviewSide.js';


class App extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     intro: {
  //       name: 'testName',
  //       address: 'testAddress',
  //       mail: 'testMail',
  //       number: 'testNumber',
  //       linkedin: 'testLkd',
  //       otherLink: 'testOther',
  //       description: 'testDescription'
  //     },
  //     workExp: [],
  //     education: [],
  //   }
  // }
  // workExp: {
  //   wordId: '',
  //   titleWork: '',
  //   companyWork: '',
  //   startWork: '',
  //   endWork: '',
  //   descriptionWork: '',
  // },
  // education: {
  //   eduId: 'testIdEdu',
  //   titleEdu: 'testEdu',
  //   institutEdu: 'testInstit',
  //   yearStartEdu: 'testYearS',
  //   yearEndEdu: 'testYearE',
  //   descriptionEdu: 'testDescrip',

  render() {
    return (
      <div className="App">
          <Header />
          <EditSide />
          <PreviewSide />
      </div>
      );  
    }
}

export default App;