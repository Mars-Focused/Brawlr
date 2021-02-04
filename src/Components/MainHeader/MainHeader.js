import React, { Component } from "react";
import axios from "axios";
import "./MainHeader.scss";

class MainHeader extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    axios
      .get("/auth/logout")
      .then(() => {
        this.props.history.push("/");
      })
      .catch((err) => console.log(err)); //<- console logs that log err are perfectly fine!
  }

  render() {
    // console.log(this.props);
    return (
      <div className="header-box">
        <button
          className="edit_btn"
          onClick={() => this.props.history.push("/Update")}
        >
          Edit User
        </button>
        <button
          className="sp_btn"
          onClick={() => this.props.history.push("/SPView")}
        >
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
