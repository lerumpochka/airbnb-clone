import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function FlatDetails() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>Flat {id} Details</h1>
      <Link href="/">Back to Home page</Link>
    </div>
  );
}

export default FlatDetails;
