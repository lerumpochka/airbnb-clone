import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Flats() {
  const router = useRouter();
  const flatId = router.query.flatId;
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>All flats</h1>
      <Link href="/">Back to Home page</Link>
    </div>
  );
}

export default Flats;