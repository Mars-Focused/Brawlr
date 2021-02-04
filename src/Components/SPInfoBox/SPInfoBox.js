import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./SPInfoBox.scss";

const SPInfoBox = (props) => {
  const [mySPObj, setMySPObj] = useState({});
  // console.log("SPInfoBox-props", props);

  useEffect(() => {
    let { mySPid } = props;
    axios.get(`/api/get_sp_info/${mySPid.user_id}`).then((res) => {
      // console.log("SPBox, res.data[0]:", res.data[0]);
      setMySPObj(res.data[0]);
    });
  }, []);

  const { username, contact_info } = mySPObj;

  function deleteSparringPartner() {
    let { mySPid } = props;
    axios.delete(`/api/del_sp/${mySPid.username}`);
  }

  return (
    <div className="info-box">
      <div className="username-text">-{username}-</div>
      <div className="info-box-text">{contact_info}</div>
      <button
        className="remove-sp-button"
        onClick={() => deleteSparringPartner()}
      >
        Remove User
      </button>
    </div>
  );
};

function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user.user.id,
    darkMode: reduxState.darkMode.darkMode,
  };
}

export default connect(mapStateToProps, {})(SPInfoBox);
