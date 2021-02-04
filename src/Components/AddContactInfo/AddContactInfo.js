import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./AddContactInfo.scss";

const AddContactInfo = (props) => {
  // in order to AddContactInfo to our user we first need to get
  // Our User ID and it SHOULD be on state...

  // This component should have what the user types in as its state
  const [contactInfo, setInput] = useState("");

  async function sendInfo(e) {
    if (e) e.preventDefault();
    // try {
    // console.log("contactInfo:", contactInfo);
    const res = await axios.put("/auth/add_contact_info", {
      contactInfo: contactInfo,
    });
    // console.log("res.data:", res.data);
    if (res.data) {
      alert(`Your Contact info has been updated.`);
    }
  }

  // console.log(props);
  return (
    <div className="aci-box">
      <div className="contact-info-row">
        <input
          placeholder="AddContactInfo"
          className="aci-input"
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="aci-btn" onClick={sendInfo}>
          Add
        </button>
      </div>
      <button className="goto-main" onClick={() => props.history.push("/Main")}>
        Go To Main
      </button>
    </div>
  );
};

function mapStateToProps(reduxState) {
  return {
    user_id: reduxState.user.user.id,
    username: reduxState.user.user.username,
    darkMode: reduxState.darkMode.darkMode,
    //whenever you return redux state that means i'll have to use a lot of dots
    //to get the specific data.
  };
}

export default connect(mapStateToProps, {})(AddContactInfo);
