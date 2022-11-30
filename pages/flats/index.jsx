import React from "react";
import Link from "next/link";
import flatsController from "../../controllers/flatsController"

function Flats(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>All flats</h1>
      <Link href="/">Back to Home page</Link>
    </div>
  );
}

export async function getServerSideProps() {
  const flats = await flatsController.findAll();
  console.log(flats)
  return {
      props: { flats }
  }

}
export default Flats;
