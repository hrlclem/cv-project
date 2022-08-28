import React, { Component } from "react";



class PreviewSide extends Component {


  render() {
    return (
        <div className="previewSide">
            <div className="persoDetailsDiv">
                    <div className="namePrev">{this.props.name}</div>  
                    {/* <div className="addressPrev">{this.props.address}</div>            
                    <div className="mailPrev">{this.props.mail}</div>            
                    <div className="numberPrev">{this.props.number}</div>            
                    <div className="linkedinPrev">{this.props.linkedin}</div>            
                    <div className="otherPrev">{this.props.otherLink}</div>     
                    <div className="descriptionPrev">{this.props.description}</div>            */}
            </div>
        </div>
      );  
    }
}

export default PreviewSide;