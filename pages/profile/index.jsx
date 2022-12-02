import React from "react";
import NavBar from "../../components/Home/NavBar";
import UserProfile from "../../components/profile/UserProfile";
import bookingsController from "../../controllers/bookingsController";
import flatsController from "../../controllers/flatsController";
import { getSession } from "next-auth/react";

function Profile(props) {
  const bookings = props.bookings;
  const flats = props.flats;

  console.log(bookings);
  return (
    <div>
      <NavBar />
      <UserProfile bookings={bookings} flats={flats} />
    </div>
  );
}

export async function getServerSideProps(req, res) {
  const visitorId = 1; //from where to get UserId???
  const ownerId = 2;
  const bookings = await bookingsController.all(visitorId);
  const flats = await flatsController.all(ownerId);

  const session = await getSession(req);
  console.log("session ", session);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: `login`,
      },
    };
  }

  return {
    props: { bookings, flats, currentUser: session?.user || null },
  };
}

export default Profile;
