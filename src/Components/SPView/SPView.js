import React, { Component } from "react";
import SPInfoBox from "../SPInfoBox/SPInfoBox";

class SPView extends Component {
  render() {
    return (
      <div>
        <h1>SPView</h1>
        <div>
          <SPInfoBox />
        </div>
      </div>
    );
  }
}

export default SPView;
