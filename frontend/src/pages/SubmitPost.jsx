import React, { useRef } from "react";
import styles from "../css/post.module.css";

const SubmitPost = () => {
  const photoRef = useRef();

  function handleSubmit(){
    if (photoRef.current.value != "") {
      console.log(photoRef);
      alert("Image Submitted");
    } else {
      alert("Submit Failed");
    }
    //reroute to home or submit post?
  }

  return (
    <div>
      <header className={styles.postNav}>
        <button className={styles.greenButton}>Join</button>
      </header>

      <div className={styles.postBackground}>
        <div className={styles.whiteBox}>
          <h1>Upload</h1>
          <p>Share your photos and videos, and let the world love them.</p>
          <input
            type="file"
            id="photo"
            accept="image/*"
            ref={photoRef}
          />
          <button className={styles.greenButton} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitPost;