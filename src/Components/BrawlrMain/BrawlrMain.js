import React, { Component } from "react";
import MainHeader from "../MainHeader/MainHeader";
import MainSPList from "../MainSPList/MainSPList";

class BrawlrMain extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <h1>BrawlrMain</h1>
        <MainSPList />
      </div>
    );
  }
}

export default BrawlrMain;
