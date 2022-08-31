import React, { Component } from "react";
import data from '../data.js';



class PreviewSide extends Component {

  render() {
    return (
        <div className="previewSide">
            <div className="persoDetailsDiv">
                    <div className="namePrev">{data.intro.name}</div>  
                    <div className="addressPrev">{this.props.address}</div>            
            </div>

            <div className="workExpPreviewDiv">
                    {/* <div className="titleWorkExpDiv">{data.intro.title}</div>   */}
            </div>
        </div>
      );  
    }
}

export default PreviewSide;