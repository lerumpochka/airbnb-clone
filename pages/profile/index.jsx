import React from "react";
import NavBar from "../../components/Home/NavBar";
import UserProfile from "../../components/profile/UserProfile";
import bookingsController from "../../controllers/bookingsController";
import flatsController from "../../controllers/flatsController";
import { getSession } from "next-auth/react";
import db from "../../database";

function Profile(props) {
  const bookings = props.bookings;
  const flats = props.flats;
  const user = props.user
  
  console.log('flats & bookings', flats, bookings);
 
  return (
    <div>
      <NavBar />
      <UserProfile bookings={bookings} flats={flats} user={user} />
    </div>
  );
}

export async function getServerSideProps(req, res) {
  
  const session = await getSession(req);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: `login`,
      },
    };
  }
  const userName = session.user.name;
  const userData = await db.User.findOne({where: {name: userName}})
  const user = JSON.parse(JSON.stringify(userData))


  const flats = await flatsController.all(user.id)
  // const owned = JSON.parse(JSON.stringify(await db.Flat.findAll({where: {UserId: 1}})))
  // console.log("owned", owned);


  const bookings = await bookingsController.all(user.id); // [{},{}]

  // const visitedFlats = bookings.map(async booking => {
  //   const flatId = booking.FlatId
  //   return await db.Flat.findByPk(flatId);
  // })
  // console.log('vis fl', JSON.parse(JSON.stringify(visitedFlats)));
  // const visited= JSON.parse(JSON.stringify(visitedFlats))

  // const id = bookings[1].FlatId
  // const one = JSON.parse(JSON.stringify(await db.Flat.findByPk(id)))


  return {
    props: {user, bookings, flats, currentUser: session?.user || null },
  };
}

export default Profile;
