import React from "react";
import FlatDetails from "../../../components/Flat/FlatDetails";
// import flatsController from "../../../controllers/flatsController";
import db from "../../../database";

function Flat(props) {
  console.log(props.jsonFlats);
  return (
    <div>
      <FlatDetails />
    </div>
  );
}

export default Flat;

export async function getServerSideProps(req, res) {
  // const flats = await flatsController.findAll();
  const flats = await db.Flat.findAll();
  const jsonFlats = JSON.parse(JSON.stringify(flats));
  return {
    props: { jsonFlats },
  };
}
