import React from "react";
import styles from "../css/landing.module.css";
import flowerPhoto1 from "../assets/flower-photo-1.jpg"
import flowerPhoto2 from "../assets/flower-photo-2.jpg"
import flowerPhoto3 from "../assets/flower-photo-3.jpg"
import flowerPhoto4 from "../assets/flower-photo-4.jpg"
import flowerPhoto5 from "../assets/flower-photo-5.jpg"
import flowerPhoto6 from "../assets/flower-photo-6.jpg"
import flowerPhoto7 from "../assets/flower-photo-7.jpg"
import flowerPhoto8 from "../assets/flower-photo-8.jpg"
import flowerPhoto9 from "../assets/flower-photo-9.jpg"


const LandingPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.landingBanner}>
        <div className={styles.navBar}>
          <div className={styles.leftNav}>
            <h1>Flower Finder</h1>
          </div>

          <div className={styles.rightNav}>
            <h2>Upload</h2>
            <h2>FAQ</h2>
            <h2 className={styles.login}>Log in</h2>
          </div>
        </div>

        <div className={styles.bannerText}>
          <p>The best free, open-source flower photos</p>
        </div>

        <div className={styles.inputSearch}>
          <input type="text" value="Search flower photos" />
          <button></button>
        </div>
      </div>

      <div className={styles.titleFilterRow}>
        <h3>Free Flower Images</h3>
        <select name="filter" id="filter">
          <option value="By Date">By Date</option>
          <option value="Trending">Trending</option>
        </select>
      </div>

      <div className={styles.photoGrid}>
        <img src={flowerPhoto1} alt="" />
        <img src={flowerPhoto2} alt="" />
        <img src={flowerPhoto3} alt="" />
        <img src={flowerPhoto4} alt="" />
        <img src={flowerPhoto5} alt="" />
        <img src={flowerPhoto6} alt="" />
        <img src={flowerPhoto7} alt="" />
        <img src={flowerPhoto8} alt="" />
        <img src={flowerPhoto9} alt="" />
      </div>

      <div className={styles.footer}>
        <p>Flower Finder &copy 2024</p>
        <p>Contact Developer Wilson Yin</p>
      </div>
    </div>
  );
};

export default LandingPage;