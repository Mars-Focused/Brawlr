import React, { Component } from "react";
// import SPInfoBox from "../SPInfoBox/SPInfoBox";
import MySPList from "../MySPList/MySPList";

class SPView extends Component {
  render() {
    return (
      <div>
        <div className="text">SPView</div>
        <div>
          <MySPList />
        </div>
      </div>
    );
  }
}

export default SPView;
