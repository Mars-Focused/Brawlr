import React, { Component } from "react";
import "./UpdateUser.scss";
import AddContactInfo from "../AddContactInfo/AddContactInfo";
import AddLikedGame from "../AddLikedGame/AddLikedGame";
class UpdateUser extends Component {
  render() {
    return (
      <div className="update-box">
        <div className="text">Add Games and your Contact Info here!</div>
        <AddLikedGame {...this.props} />
        <AddContactInfo {...this.props} />
      </div>
    );
  }
}

export default UpdateUser;
