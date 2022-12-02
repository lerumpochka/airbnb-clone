import Image from "next/image";
import React from "react";
import ImageUpload from "../ImageUpload";
import styles from "./NewFlat.module.css";

function NewFlatForm(props) {
  const id = props.user.id
  return (
    <div>
      <div className={styles.bg__image}></div>
      <div className={styles.container}>
        <div className={styles.form__container}>
          <h1>Host your flat</h1>
          <form action="/api/flats" method="POST">
            <input hidden name="UserId" defaultValue={id} />
            <label htmlFor="type">Type of the house:</label>
            <input type="text" id="type" name="type" placeholder="house, villa, etc..." required />
            <label htmlFor="location">Address:</label>
            <input type="text" id="location" name="location" placeholder="location" required />
            <label htmlFor="description">Write some description:</label>
            <textarea id="description" name="description" rows="4" cols="30"></textarea>
            <ImageUpload css={styles.upload} />
            <input className={styles.submit} type="submit" value="Submit" />
          </form>
        </div>
        <div className={styles.form__img}></div>
      </div>
    </div>
  );
}

export default NewFlatForm;
