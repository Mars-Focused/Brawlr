import React, { Component } from "react";

class MainHeader extends Component {
  render(props) {
    return (
      <div>
        <button onClick={props.history.push("/Update")}>Edit User</button>
        <button>My Sparing Partners</button>
        <button>Logout</button>
      </div>
    );
  }
}

export default MainHeader;
