import React, { Component } from "react";
import MainHeader from "../MainHeader/MainHeader";
import MainSPList from "../MainSPList/MainSPList";
import "./BrawlrMain.scss";

class BrawlrMain extends Component {
  render() {
    return (
      <div className="main-box">
        <MainHeader {...this.props} />
        <MainSPList {...this.props} />
      </div>
    );
  }
}

export default BrawlrMain;
