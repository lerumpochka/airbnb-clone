import React from "react";
import FlatDetails from "../../../components/Flat/FlatDetails";
// import flatsController from "../../../controllers/flatsController";

import db from "../../../database";

function Flat(props) {
  const flat = props.flat
  return (
    <div>
      <FlatDetails 
        key={flat.id}
        id={flat.id}
        type={flat.type}
        description={flat.description} 
        location={flat.location}
        userId={flat.UserId}
        imgSrc = {flat.imgSrc}  />
    </div>
  );
}

export default Flat;

export async function getServerSideProps(req, res) {
  // const flats = await flatsController.findAll();
  const id = req.query.id
  const flat = JSON.parse(JSON.stringify(await db.Flat.findByPk(id)));
  return {
    props: { flat },
  };
}
