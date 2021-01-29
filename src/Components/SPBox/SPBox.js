import axios from "axios";
import React from "react";
import { connect } from "react-redux";

//in this component we need to take in the SPid
//we need to call

const SPBox = (props) => {
  function getRecSparingPartnerInfo() {
    let { SPid } = props;
    console.log(SPid);
    return axios.get(`/api/get_sp_info/${SPid.user_id}`);
  }

  let SPObj = getRecSparingPartnerInfo();

  return (
    <div>
      <h1>SPBox</h1>
    </div>
  );
};

function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user.user.id,
    darkMode: reduxState.darkMode.darkMode,
  };
}

export default connect(mapStateToProps, {})(SPBox);
