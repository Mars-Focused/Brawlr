import React, { useState } from "react";
import axios from "axios";
// import { connect } from "react-redux";

// import { register } from "../../../server/controllers/authController";

const Login = (props) => {
  console.log("login props: ", props);
  //where username is is what we're calling the information on state
  //where setUsername is is the function we will call to update that state
  //and what we pass into useState will be our default state value
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(e) {
    if (!username || !password) return alert("cannot be blank");
    if (e) e.preventDefault();
    try {
      const res = await axios.post("/auth/register", { username, password }); //<- whats inside these curly braces is "body"
      if (res.data.id) props.history.push("/Update");
    } catch (e) {
      alert("User already exists");
      // this.props.history.push("/");
    }
  }

  async function login(e) {
    if (e) e.preventDefault();
    try {
      const user = await axios.post("/auth/login", { username, password }); // <- axios.post to log the user in, response is req.session.user from the server, storing it in variable called user.
      //Username and Password go straight onto req.body
      console.log("trying to Log in", user.data);
      if (user.data.id) {
        // console.log(`user.data ${user.data[0]}`);
        // <- When you get a successful response from axios it's stored on a object called "data".
        this.props.loginUser(user.data); // <- is calling the function loginUser on userReducer.js line 19
        this.props.history.push("/Update"); // .this will end the function kind of like a return statement
        this.setState({ user: this.state });
      }
    } catch (e) {
      alert("Login failed. Please try again.");
    }
  }

  return (
    <div>
      <h3>Login</h3>
      <input
        type="text"
        className="username-input"
        placeholder="Name"
        onChange={(e) => setUsername({ username: e.target.value })}
      />
      <input
        type="password"
        className="password-input"
        placeholder="Password"
        onChange={(e) => setPassword({ password: e.target.value })}
      />
      <button className="register-btn" type="submit" onClick={register}>
        Register
      </button>
      <button className="login-btn" type="submit" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;
