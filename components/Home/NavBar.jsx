import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";
import { useSession, signIn, signOut } from "next-auth/react";

function NavBar(props) {
  const [isClicked, setIsClicked] = useState(false);
  const { data: session } = useSession();

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
        {props.homePage && (
          <div className={styles.search__container}>
            <i>
              <SearchIcon />
            </i>
            <input type="text" name="search" id="search" placeholder="Search" autoComplete="off" />
          </div>
        )}

        <div className={styles.icon__container}>
          <Link className={styles.hostLink} href="/flats/new">
            <AddIcon sx={{ fontSize: 30 }} />
            <span>Host your flat</span>
          </Link>
          <button onClick={() => setIsClicked(() => !isClicked)} className={styles.btn}>
            <div>
              <MenuIcon />
              <AccountCircleIcon />
            </div>
          </button>
        </div>
      </div>
      {isClicked && (
        <div onClick={() => setIsClicked(false)} className={styles.profile__card}>
          <ul>
            {session ? (
              <li className={styles.loginContainer}>
                <p>Signed in as {session.user.name}</p>
                <button onClick={() => signOut()}>Sign Out</button>
              </li>
            ) : (
              <li className={styles.loginContainer}>
                <p>Not signed in</p>
                <button onClick={() => signIn()}>Sign In</button>
              </li>
            )}

            <li>
              <Link className={styles.profileLink} href="/profile">
                Profile
              </Link>
            </li>
            <li>help</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
