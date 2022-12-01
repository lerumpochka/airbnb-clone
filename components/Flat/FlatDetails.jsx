import React from "react";
import NavBar from "../Home/NavBar";
import Image from "next/image";
import styles from "./Flat.module.css";

function FlatDetails() {
  return (
    <div className={styles.flatDetails__root}>
      <NavBar homePage={false} />
      <div className={styles.flatDetails__container}>
        <div className={styles.img__container}>
          <Image
            className={styles.img__details__page}
            src="https://res.cloudinary.com/demo/image/fetch/https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
            alt="Flat img"
            width="500"
            height="350"
          />
          <div>
            <h1>Address</h1>
            <p>Description</p>
          </div>
        </div>
        <div className={styles.form__container}>
          <div>
            <form className={styles.form} action="/api/bookings" method="POST">
              <label>Start Date:</label>
              <input type="date" name="startDate" id="startDate" />
              <label>End Date:</label>
              <input type="date" name="endDate" id="endDate" />
              <div>
                <input className={styles.form__btn} type="submit" value="Book" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlatDetails;
