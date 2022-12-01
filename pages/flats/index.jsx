import React from "react";
import Link from "next/link";
import flatsController from "../../controllers/flatsController";

function Flats(props) {
  const flats = props.flats;
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "50px", textAlign: "center" }}>All flats</h1>

      {flats.map((flat) => (
        <li key={flat.id}>
          {flat.type} in {flat.location} <br /> Foto: <br /> image {flat.imgSrc}
        </li>
      ))}
      <Link href="/">Back to Home page</Link>
    </div>
  );
}

export async function getServerSideProps() {
  const flats = await flatsController.findAll();
  return {
    props: { flats },
  };
}
export default Flats;
