import React from "react";
import Link from "next/link";

function Login() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>Login Page</h1>
      <Link href="/">Back to Home page</Link>
    </div>
  );
}

export default Login;
