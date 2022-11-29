import React from "react";
import Link from "next/link";

function Owner() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>All the seller flats here</h1>
      <Link href="/">Back to Home page</Link>
    </div>
  );
}

export default Owner;
