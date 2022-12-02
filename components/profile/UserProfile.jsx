import React from "react";
import FlatCard from "../Flat/FlatCard";
import styles from "./UserProfile.module.css";

function UserProfile({ bookings, flats }) {
  return (
    <div className={styles.container}>
      <h1>Visited Flats</h1>
      <div className={styles.visited__flats}>
        {bookings.map((booking) => (
          <FlatCard id={booking.id} imgSrc={booking.imgSrc} key={booking.id} />
        ))}
      </div>
      <hr />
      <h1>My hosted flats</h1>
      <div className={styles.my__hosted__flats}>
        {flats.map((flat) => (
          <FlatCard
            key={flat.id}
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
