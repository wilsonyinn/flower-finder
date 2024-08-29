import React from "react";
import Photo from "../assets/flower-photo-1.jpg"
import styles from "../css/view-post.module.css"

const ViewPost = () => {
  return (
    <body>
      <div className={styles.navBar}></div>
      <div className={styles.background}>
        <div className={styles.whiteBox}>
          <button className={styles.exit}>&times;</button>
          <div className={styles.userInfo}>Henry Han @photographer1132</div>
          <div className={styles.greyBox}>
            <img src={Photo} alt="" />
          </div>
        </div>
      </div>
    </body>
  );
};

export default ViewPost;