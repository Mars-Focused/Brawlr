import React, { Component } from "react";
import axios from "axios";

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.logout = this.logout.bind(this);
  }

  logout() {
    axios
      .get("/auth/logout")
      .then(() => {
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  }

  render() {
    // console.log(this.props);
    return (
      <div>
        <button onClick={() => this.props.history.push("/Update")}>
          Edit User
        </button>
        <button onClick={() => this.props.history.push("/SPView")}>
          My Sparing Partners
        </button>
        <button className="login_btn" onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}

export default MainHeader;
