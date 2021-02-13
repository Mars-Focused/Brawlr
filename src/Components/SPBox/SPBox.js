import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./SPBox.scss";

const SPBox = (props) => {
  const [SPObj, setSPObj] = useState({});
  // console.log("SPBox-props", props);

  useEffect(() => {
    let { SPid } = props;
    axios.get(`/api/get_sp_info/${SPid.user_id}`).then((res) => {
      // console.log("SPBox, res.data[0]:", res.data[0]);
      setSPObj(res.data[0]);
    });
  }, []);

  const { username, my_main, about_me } = SPObj;

  console.log(SPObj);

  return (
    <div className="sp-box">
      <div className="sp-text">{username}</div>
      <div className="sp-main">{my_main}</div>
      <div className="sp-about">{about_me}</div>
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
