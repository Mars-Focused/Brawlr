import React, { Component } from "react";
import MainHeader from "../MainHeader/MainHeader";
import MainSPList from "../MainSPList/MainSPList";

class BrawlrMain extends Component {
  render() {
    return (
      <div>
        <MainHeader {...this.props} />
        <MainSPList {...this.props} />
      </div>
    );
  }
}

export default BrawlrMain;
