import React from "react";
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
  return (
    <div>
      <div className={styles.upper__nav}>
        <h1>Introducing our 2022 Winter Release</h1>
        <Link className={styles.link} href="#">
          Explore what&apos;s new
        </Link>
      </div>
      <NavBar homePage={true} />
      <div style={flatsContainer}>
        <FlatCard />
        <FlatCard />
        <FlatCard />
        <FlatCard />
      </div>
    </div>
  );
}

export default HomePage;
