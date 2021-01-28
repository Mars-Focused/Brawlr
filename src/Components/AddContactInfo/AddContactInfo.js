import React, { useState } from "react";
import { connect } from "react-redux";
import { axios } from "axios";

const AddContactInfo = () => {
  // in order to AddContactInfo to our user we first need to get
  // Our User ID and it SHOULD be on state...

  // This component should have what the user types in as its state
  const [contactInfo, setInput] = useState("");

  async function sendInfo(e) {
    if (e) e.preventDefault();
    console.log(contactInfo.input);
    await axios.post("/auth/add_contact_info", {
      contactInfo: contactInfo.input,
    });
    // const { username } = reduxState;
  }
  console.log(contactInfo.input);
  return (
    <div>
      <input
        placeholder="AddContactInfo"
        className="CIInput"
        onChange={(e) => setInput({ input: e.target.value })}
      ></input>
      <button onClick={sendInfo}>Add</button>
    </div>
  );
};

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapStateToProps, {})(AddContactInfo);
