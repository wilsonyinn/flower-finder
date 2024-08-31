import React, { useRef } from "react";
import styles from "../css/login-registration.module.css";
import AppleLogo from "../assets/apple logo.png";
import GoogleLogo from "../assets/google logo.png";
import FacebookLogo from "../assets/facebook logo.png";
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const dummyEmail = "testuser@gmail.com";
  const dummyPassword = "testPassword123";
  
  const navigate = useNavigate();

  function handleSubmit() {
    if (emailRef.current.value === dummyEmail && passwordRef.current.value === dummyPassword){
        alert("successful login");
        navigate("/landing");
    } else {
        alert("login failed");
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginNav}>
        <button className={styles.greenButton}>Join</button>
      </div>

      <div className={styles.loginRegisterBackground}>
        <div className={styles.whiteBox}>
          <h1 className={styles.whiteBoxText}>Welcome back.</h1>

          <div className={styles.quickLoginButtons}>
            <img src={AppleLogo} alt="" />
            <img src={GoogleLogo} alt="" />
            <img src={FacebookLogo} alt="" />
          </div>

          <p className={styles.whiteBoxText}>Or, sign in with your email</p>

          <div className={styles.whiteBoxTitle}>
            <h2 className={styles.whiteBoxText}>Email</h2>
            <input
              className={styles.whiteBoxText}
              id="email"
              type="text"
              placeholder="Email"
              ref={emailRef}
            />
          </div>

          <div className={styles.whiteBoxTitle}>
            <h2 className={styles.whiteBoxText}>Password</h2>
            <input
              className={styles.whiteBoxText}
              id="password"
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>

          <div className={styles.whiteBoxTitle}>
            <h2 className={styles.whiteBoxText}>Forgot your password?</h2>
          </div>
          <button className={styles.greenButton} onClick={handleSubmit}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
