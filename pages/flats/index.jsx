import React from "react";
import Link from "next/link";

function Flats() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>All flats</h1>
      <Link href="/">Back to Home page</Link>
    </div>
  );
}

export default Flats;
