import React from "react";
import bookingsController from "../../controllers/bookingsController";
import flatsController from "../../controllers/flatsController";

function Profile(props) {
  const bookings = props.bookings;
  const flats = props.flats;

  return (
    <>
      <div>Profile</div>
      <h3>My bookings</h3>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>visited flatId: {booking.FlatId}</li>
        ))}
      </ul>
      <br />
      <h3>My flats</h3>
      <ul>
        {flats.map((flat) => (
          <li key={flat.id}>
            I have {flat.type} in {flat.location}
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps(req, res) {
  const visitorId = 1; //from where to get UserId???
  const ownerId = 2;
  const bookings = await bookingsController.all(visitorId);
  const flats = await flatsController.all(ownerId);

  return {
    props: { bookings, flats },
  };
}

export default Profile;
