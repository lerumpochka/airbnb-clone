import React from "react";
import bookingsController from "../../controllers/bookingsController";
import flatsController from "../../controllers/flatsController";


function Profile(props) {
  const bookings = props.bookings


  return (
    <>
      <div>Profile</div>
      <h3>My bookings</h3>
      <ul>
        {bookings.map(booking => <li key={booking.id}>visited flatId: {booking.FlatId}</li>)}
      </ul>
      <br />
      

    </>
  )
}


export async function getServerSideProps(req, res) {
  const visitorId = 1 //from where to get UserId??? 

  const bookings = await bookingsController.all(visitorId);


  return {
    props: { bookings}
  }

}

export default Profile;
