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
  const bookings = await bookingsController.all(user.id)

  return {
    props: {user, flats, bookings, currentUser: session?.user || null },
  };
}

export default Profile;
