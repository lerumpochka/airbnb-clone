import React from "react";
import FlatCard from "../Flat/FlatCard";
import styles from "./UserProfile.module.css";

function UserProfile(props) {
  const bookings = props.bookings
  const flats = props.flats
  const user = props.user
  
  return (
    <div className={styles.container}>
      <h1>{user.name}, see your Visited Flats of </h1>
      <div className={styles.visited__flats}>
        {bookings.map((booking, index) => (
          <FlatCard key={index} type={booking.FlatId}  id={booking.FlatId} />
        ))}
      </div>
      <hr />
      <h1>{user.name}'s hosted flats</h1>
      <div className={styles.my__hosted__flats}>
        {flats.map((flat, index) => (
          <FlatCard
            key={index}
            imgSrc={flat.imgSrc}
            id={flat.id}
            type={flat.type}
            location={flat.location}
            description={flat.description}
          />
        ))}
      </div>
    </div>
  );
}

export default UserProfile;
