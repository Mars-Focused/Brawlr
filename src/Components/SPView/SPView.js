import React, { Component } from "react";
// import SPInfoBox from "../SPInfoBox/SPInfoBox";
import MySPList from "../MySPList/MySPList";
import "./SPView.scss";

class SPView extends Component {
  render() {
    return (
      <div className="spv-upper-box">
        <div className="spv-text">My Sparring Partners</div>
        <div>
          <MySPList />
        </div>
      </div>
    );
  }
}

export default SPView;
