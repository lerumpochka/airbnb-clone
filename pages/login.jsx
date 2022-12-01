import React from "react";
import LoginBtn from "../components/login-btn";
function Login() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>Login Page</h1>
      <LoginBtn />
      {/* <Link href="/">Back to Home page</Link> */}
    </div>
  );
}

export default Login;
