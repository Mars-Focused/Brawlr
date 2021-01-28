import React, { Component } from "react";
import AddContactInfo from "../AddContactInfo/AddContactInfo";
import AddLikedGame from "../AddLikedGame/AddLikedGame";
class UpdateUser extends Component {
  render() {
    return (
      <div>
        <h1>UpdateUserView</h1>
        <AddLikedGame />
        <AddContactInfo {...this.props} />
      </div>
    );
  }
}

export default UpdateUser;
