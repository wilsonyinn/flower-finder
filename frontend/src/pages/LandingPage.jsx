import React, { useEffect, useState } from "react";
import styles from "../css/landing.module.css";
import { useNavigate, useLocation } from "react-router-dom"

const LandingPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [imageData, setImageData] = useState([])
  
  useEffect(() => {
    if (!location.state){
      navigate("/login")
    } else {
      setIsLoggedIn(location.state.isLoggedIn);
      setUsername(location.state.username);
    }
  }, [location.state, navigate])

  useEffect(() => {
    const url = 'http://localhost:5000/api/uploads/recent-images';
    fetch(url, {method: 'GET'})
    .then((response) => {
      if (!response.ok) {
        console.log(response)
        const errorData = response.json();
        throw new Error(JSON.stringify(errorData));
      }
      return response.json()
    }).then((data) => {
      setImageData(data);
    })
    .catch((error) => {
      console.error('Error:', JSON.parse(error.message));
    });
  }, [])

  function handleReroute(route) {
    navigate(route);
  }

  if (isLoggedIn){
    return (
      <div className={styles.wrapper}>
        <div className={styles.landingBanner}>
          <div className={styles.navBar}>
            <div className={styles.leftNav}>
              <h1>Flower Finder</h1>
            </div>
  
            <div className={styles.rightNav}>
              <h2>@{username}</h2>
              <h2 onClick={() => handleReroute("/submit")}>Upload</h2>
              <h2 onClick={() => handleReroute("/login")}className={styles.login}>Log out</h2>
            </div>
          </div>
  
          <div className={styles.bannerText}>
            <p>The best free, open-source flower photos</p>
          </div>
  
          <div className={styles.inputSearch}>
            <input type="text" placeholder="Search flower photos" />
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
          {imageData.map((singleData) => {
            const base64String = btoa(new Uint8Array(singleData.img.data.data).reduce(function (data, byte) {
              return data + String.fromCharCode(byte);
          }, ''));
            return <img src={`data:image/png;base64,${base64String}`} alt="" />
          })}
        </div>
  
        <div className={styles.footer}>
          <p>Flower Finder &copy 2024</p>
          <p>Contact Developer Wilson Yin</p>
        </div>
      </div>
    );
  }
};

export default LandingPage;