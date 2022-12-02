import React, { useState } from "react";
import NavBar from "./NavBar";
import Link from "next/link";
import styles from "./NavBar.module.css";
import FlatCard from "../Flat/FlatCard";

const flatsContainer = {
  width: "100%",
  padding: "70px",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  flexWrap: "wrap",
  gap: "3vw",
};
function HomePage(props) {
  const flats = props.flats;

  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  console.log(search);

  return (
    <div>
      <div className={styles.upper__nav}>
        <h1>Introducing our 2022 Winter Release</h1>
        <Link className={styles.link} href="#">
          Explore what&apos;s new
        </Link>
      </div>
      <NavBar homePage={true} handleChange={handleChange} />
      <div style={flatsContainer}>
        {flats.map((flat, index) =>
          flat.location.toLowerCase().includes(search) ||
          flat.type.toLowerCase().includes(search) ? (
            <FlatCard
              key={flat.id}
              id={flat.id}
              type={flat.type}
              description={flat.description}
              location={flat.location}
              userId={flat.UserId}
              imgSrc={flat.imgSrc}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

export default HomePage;
