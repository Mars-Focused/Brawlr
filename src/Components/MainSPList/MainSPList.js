import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { getRecSP } from "../../../server/controllers/sPartnerController";

//we need to call getRecSP from sPartnerController
//and pass in User_id off of this state
//it will return user_id objects within an array
//we need to map each object into its own SPBox

const MainSPList = (props) => {
  function getSparingPartners(input) {
    const { user_id } = props;
    axios.get("/api/get_rec_sp", { user_id });
  }
  getSparingPartners(props);
  return (
    <div>
      <h1>MainSPList</h1>
    </div>
  );
};

function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user.user.id,
  };
}

export default connect(mapStateToProps, {})(MainSPList);
