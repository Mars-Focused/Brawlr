import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { loginUser } from "../../Redux/userReducer";

const AddContactInfo = (props) => {
  // in order to AddContactInfo to our user we first need to get
  // Our User ID and it SHOULD be on state...

  // This component should have what the user types in as its state
  const [contactInfo, setInput] = useState("");

  async function sendInfo(e) {
    if (e) e.preventDefault();
    // try {
    console.log(contactInfo);
    const res = await axios.put("/auth/add_contact_info", {
      contactInfo: contactInfo,
    });
    if (res.data) props.history.push("/Main");
    // } catch (e) {
    //   alert("email didn't update something went wrong");
    // }
    // const { username } = reduxState;
  }
  console.log(props);
  return (
    <div>
      <input
        placeholder="AddContactInfo"
        className="CIInput"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={sendInfo}>Add</button>
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
