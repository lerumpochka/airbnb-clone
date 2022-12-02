import React from "react";
import FlatDetails from "../../../components/Flat/FlatDetails";
// import flatsController from "../../../controllers/flatsController";
import { getSession } from "next-auth/react";
import db from "../../../database";

function Flat(props) {
  const flat = props.flat
  const user=props.user
 
  return (
    <div>
      <FlatDetails
        key={flat.id}
        id={flat.id}
        type={flat.type}
        description={flat.description}
        location={flat.location}
        imgSrc={flat.imgSrc}
        const userId = {user.id}
         />
    </div>
  );
}

export default Flat;

export async function getServerSideProps(req, res) {

  const session = await getSession(req);
  console.log("session ", session); //  { user: { name: 'vale1', email: '88' }
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: `login`,
      },
    };
  }
  const userName = session.user.name;

  // const flats = await flatsController.findAll();
  const id = req.query.id
  const flat = JSON.parse(JSON.stringify(await db.Flat.findByPk(id)));
  const user = JSON.parse(JSON.stringify( await db.User.findOne({ where: { name: userName } })));

  return {
    props: { flat, user, currentUser: session?.user || null },
  };

}
