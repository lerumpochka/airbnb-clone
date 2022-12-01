import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

function NavBar({ homePage }) {
  const [isClicked, setIsClicked] = useState(false);

  const [searchInput, setSearchInput] = useState("");

  return (
    <nav className={styles.nav__container}>
      <div className={styles.lower__nav}>
        <Image
          className={styles.img}
          src="/airbnb-logo.png"
          alt="airbnb log"
          width="120"
          height="70"
        />
        {homePage && (
          <div className={styles.search__container}>
            <i>
              <SearchIcon />
            </i>
            <input type="text" name="search" id="search" placeholder="Search" autoComplete="off" />
          </div>
        )}

        <button onClick={() => setIsClicked(() => !isClicked)} className={styles.btn}>
          <div>
            <MenuIcon />
            <AccountCircleIcon />
          </div>
        </button>
      </div>
      {isClicked && (
        <div onClick={() => setIsClicked(false)} className={styles.profile__card}>
          <ul>
            <li>Profile</li>
            <li>Login</li>
            <li>help</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
