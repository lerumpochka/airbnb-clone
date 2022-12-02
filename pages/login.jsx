import { height } from "@mui/system";
import React from "react";
import NavBar from "../components/Home/NavBar";
import LoginBtn from "../components/login-btn";

const loginContainer = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "100px",
};

const heading = {
  fontSize: "50px",
  paddingBottom: "30px",
};
function Login() {
  return (
    <div style={{ textAlign: "center" }}>
      <NavBar />
      <div style={loginContainer}>
        <h1 style={heading}>Login</h1>
        <LoginBtn />
      </div>
    </div>
  );
}

export default Login;
