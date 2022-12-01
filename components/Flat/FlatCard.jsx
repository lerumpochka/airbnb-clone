import React from "react";
import styles from "./Flat.module.css";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";

function FlatCard() {
  return (
    <div style={{ marginBottom: "30pxs" }}>
      <Link className={styles.link} href="/flats/12">
        <div className={styles.container}>
          <div className={styles.img__container}>
            <Image
              className={styles.img}
              src="https://res.cloudinary.com/demo/image/fetch/https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg"
              alt="flat img"
              width="300"
              height="300"
            />
          </div>
          <div className={styles.address__container}>
            <p>Flat Address....</p>
            <div>
              <StarIcon fontSize="20" />
              <span>4.8</span>
            </div>
          </div>
          <div className={styles.price__container}>
            <strong>$100 </strong>
            <span>night</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default FlatCard;
