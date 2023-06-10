import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon } from '@heroicons/react/24/outline';

import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [user, setUser] = useState(null);
  const mobileNavRef = useRef(null);
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { fullname = '', username = '', email = '', isAdmin = false } = user || {};
  const dName = fullname.charAt(0);

  const handleClickClose = () => {
    setOpenNav((prevOpenNav) => !prevOpenNav);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    setIsLoggedIn(false);
    router.push('/login');
  };

  const handleshowAccount = () => {
    setShowAccount(!showAccount);
  };

  useEffect(() => {
    const handleclickoutside = (e) => {
      if (mobileNavRef.current && !mobileNavRef.current.contains(e.target)) {
        setOpenNav(false);
      }
    };

    document.addEventListener('mousedown', handleclickoutside);
    return () => {
      document.removeEventListener('mousedown', handleclickoutside);
    };
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const { fullname = '', username = '', email = '', isAdmin = false } = JSON.parse(userData);
      setUser({ fullname, username, email, isAdmin });
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const user = localStorage.getItem('user');
    setIsLoggedIn(!!user);
  }, []);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.nav_left}>
          <ul className={styles.nav_links}>
            <li className={styles.nav_link}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/ourprofessionals">Our Professionals</Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/oursuites">Our Suites</Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/ourlocations">Locations</Link>
            </li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <Link href="/">
            <Image
              className={styles.companImg}
              src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376745/zendora/companyImage_zoix8r.png"
              alt="userImage"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className={styles.nav_right}>
          <ul className={styles.nav_links}>
            <li className={styles.nav_link}>
              <Link href="/bookappointment">Book an Appointment</Link>
            </li>
            <li className={styles.nav_link}>
              <Link href="/contactus">Contact us</Link>
            </li>
            {isLoggedIn ? (
              <></>
            ) : (
              <>
                <li className={styles.nav_link}>
                  <Link href="/signup">Sign up</Link>
                </li>
                <li className={styles.nav_link}>
                  <Link href="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        {isLoggedIn && (
          <div className={styles.user}>
            <p onClick={handleshowAccount}>{dName}</p>
            {showAccount && (
              <div className={styles.infoContainer}>
                <ul>
                  <li>
                    <h2>{username}</h2>
                  </li>
                  <li>
                    <p>{email}</p>
                  </li>
                  {isAdmin ? <li><button>
                    <Link href="/admin">Admin Pannel</Link>
                  </button></li> : null}
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
        <div className={styles.mobileNavigation}>
          <Bars3Icon onClick={handleClickClose} className={styles.barIcons} />
        </div>
      </nav>
      {openNav && (
        <div className={styles.mobileView}>
          <div ref={mobileNavRef} className={styles.mobiNavContainer}>
            <div className={styles.mobileImageContainer}>
              <Image src="https://res.cloudinary.com/dbbtqwy3w/image/upload/v1686376745/zendora/companyImage_zoix8r.png" alt="userImage" width={100} height={100} />
            </div>
            <div className={styles.mobileUl}>
              <ul>
                <Link href="/">
                  <li>Home</li>
                </Link>
                <Link href="/ourprofessionals">
                  <li>Our Professionals</li>
                </Link>
                <Link href="/oursuites">
                  <li>Our Suites</li>
                </Link>
                <Link href="/ourlocations">
                  <li>Locations</li>
                </Link>
                <Link href="/bookappointment">
                  <li>Book an Appointment</li>
                </Link>
                <Link href="/contactus">
                  <li>Contact Us</li>
                </Link>
                {isLoggedIn ? (
                  <>
                    {isAdmin ? <button className={styles.mobiellogout}>
                      <Link href="/admin">Admin Pannel</Link>
                    </button> : null}
                    <button className={styles.mobiellogout} onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                    <Link href="/signup">
                      <li>Sign up</li>
                    </Link>
                    <Link href="/login">
                      <li>Login</li>
                    </Link>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
