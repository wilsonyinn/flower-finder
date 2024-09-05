import React, { useRef, useState } from "react";
import styles from "../css/login-registration.module.css";
import AppleLogo from "../assets/apple logo.png";
import GoogleLogo from "../assets/google logo.png";
import FacebookLogo from "../assets/facebook logo.png";
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  
  const navigate = useNavigate();
  const [loginMessage, setLoginMessage] = useState("");

  function handleLogin() {

    const url = 'http://localhost:5000/api/users/login';

    const userInfo = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo), 
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response)
          return response.json().then((errorData) => {
            throw new Error(JSON.stringify(errorData));
          })
          throw new Error(response);
        }
        return response.json()
      }).then((data) => {
        console.log('Response data:', data);
        if (data.success) {
          navigate("/landing", {state: {id: }});
        }
      })
      .catch((error) => {
        console.error('Error:', JSON.parse(error.message));
        setLoginMessage(JSON.parse(error.message).message);
      });
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
          <p>{loginMessage}</p>
          <button className={styles.greenButton} onClick={handleLogin}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
