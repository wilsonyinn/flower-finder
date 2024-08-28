import React, { useRef } from "react";
import styles from "../css/login-registration.module.css";
import AppleLogo from "../assets/apple logo.png";
import GoogleLogo from "../assets/google logo.png";
import FacebookLogo from "../assets/facebook logo.png";

const LoginPage = () => {
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
              value="name@email.com"
            />
          </div>

          <div className={styles.whiteBoxTitle}>
            <h2 className={styles.whiteBoxText}>Password</h2>
            <input
              className={styles.whiteBoxText}
              id="password"
              type="text"
              value="Password"
            />
          </div>

          <div className={styles.whiteBoxTitle}>
            <h2 className={styles.whiteBoxText}>Forgot your password?</h2>
          </div>
          <button className={styles.greenButton} type="submit">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
