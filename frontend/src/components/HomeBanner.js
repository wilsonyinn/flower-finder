import React from 'react'
import styles from '../css/landing.module.css'
import '../App.css'

const LandingBanner = () => {
  return (
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
  )
}

export default LandingBanner