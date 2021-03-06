import React, { useState } from "react";
import axios from "axios";
import "./Login.scss";
import { connect } from "react-redux";
import { loginUser } from "../../Redux/userReducer";

const Login = (props) => {
  // console.log("login props: ", props);
  //where username is is what we're calling the information on state
  //where setUsername is is the function we will call to update that state
  //and what we pass into useState will be our default state value
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    if (!username || !password) return alert("cannot be blank");
    if (e) e.preventDefault();
    try {
      const res = await axios.post("/auth/register", { username, password });
      // console.log(res.data);
      if (res.data) {
        props.history.push("/Update");
      }
    } catch (e) {
      alert("User already exists");
      props.history.push("/");
    }
  }

  async function login(e) {
    if (e) e.preventDefault();
    try {
      const res = await axios.post("/auth/login", { username, password }); // <- axios.post to log the user in, response is req.session.user from the server, storing it in variable called user.
      if (res.data.id) {
        props.loginUser(res.data); // <- is calling the function loginUser on userReducer.js
        props.history.push("/Update"); // .this will end the function kind of like a return statement
      }
    } catch (e) {
      alert("Login failed. Please try again.");
    }
  }

  return (
    <div className="login">
      <div className="login-card">
        <div className="title-box">
          <div className="title">BRAWLR</div>
          <div className="sub-title">Comradery Thru Combat</div>
        </div>
        <div className="row">
          <input
            type="text"
            className="username-input"
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className="register-btn" type="submit" onClick={register}>
            Register
          </button>
        </div>
        <div className="row">
          <input
            type="password"
            className="password-input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn" type="submit" onClick={login}>
            Login
          </button>
        </div>
        <div className="description">
          Enjoy Fighting games? You can find a sparring partner here!
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(reduxState) {
  return reduxState;
}

export default connect(mapStateToProps, { loginUser })(Login);
