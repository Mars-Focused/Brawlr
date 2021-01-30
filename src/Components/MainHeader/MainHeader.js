import React, { Component } from "react";

class MainHeader extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    // const { history } = this.props;
    // console.log(this.props);
    return (
      <div>
        <button onClick={() => this.props.history.push("/Update")}>
          Edit User
        </button>
        <button>My Sparing Partners</button>
        <button>Logout</button>
      </div>
    );
  }
}

export default MainHeader;
