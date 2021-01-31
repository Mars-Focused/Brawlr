import React, { Component } from "react";
// import SPInfoBox from "../SPInfoBox/SPInfoBox";
import MySPList from "../MySPList/MySPList";

class SPView extends Component {
  render() {
    return (
      <div>
        <h1>SPView</h1>
        <div>
          <MySPList />
        </div>
      </div>
    );
  }
}

export default SPView;
