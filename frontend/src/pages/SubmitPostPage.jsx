import React, { useRef } from "react";
import styles from "../css/post.module.css";
import { useNavigate } from "react-router-dom"

const SubmitPostPage = () => {
  const photoRef = useRef();

  const navigate = useNavigate();

  function handleSubmit(){
    if (photoRef.current.value != "") {
      console.log(photoRef);
      alert("Image Submitted");
      navigate("/")
    } else {
      alert("Submit Failed");
    }
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

export default SubmitPostPage;