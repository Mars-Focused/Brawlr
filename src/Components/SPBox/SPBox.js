import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const SPBox = (props) => {
  const [SPObj, setSPObj] = useState({});
  // function getRecSparingPartnerInfo() {
  // let { SPid } = props;
  // axios.get(`/api/get_sp_info/${SPid.user_id}`).then((res) => {
  //   console.log("SPBox, res.data[0]:", res.data[0]);
  //   setSPObj(res.data[0]);
  // });
  // }

  useEffect(() => {
    let { SPid } = props;
    axios.get(`/api/get_sp_info/${SPid.user_id}`).then((res) => {
      console.log("SPBox, res.data[0]:", res.data[0]);
      setSPObj(res.data[0]);
    });
  }, []);

  const { username } = SPObj;

  return (
    <div>
      <h1>{username}</h1>
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
