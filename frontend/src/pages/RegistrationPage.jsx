import React, { useRef } from "react";
import styles from "../css/login-registration.module.css"
import GoogleLogo from "../assets/google logo.png"
import FacebookLogo from "../assets/facebook logo.png"
import AppleLogo from "../assets/apple logo.png"
import { useNavigate } from "react-router-dom"

const RegistrationPage = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  function handleSubmit() {
    const url = 'http://localhost:5000/api/users/register';

    const userInfo = {
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(userInfo);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
    .then(async (response) => {
      if (!response.ok) {
        console.log(response)
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }
      return response.json()
    }).then((data) => {
      if (data.success) {
        alert("registration success");
        navigate("/login");
      }
    })
    .catch((error) => {
      console.error('Error:', JSON.parse(error.message));
    });
  }
  return (
    <div>
      <div className={styles.loginNav}>
        <button className={styles.greenButton}>Join</button>
      </div>

      <div className={styles.loginRegisterBackground}>
        <div className={styles.whiteBox}>
          <h1 className={styles.whiteBoxText}>Create an Account</h1>

          <div className={styles.quickLoginButtons}>
            <img src={GoogleLogo} alt="" />
            <img src={FacebookLogo} alt="" />
            <img src={AppleLogo} alt="" />
          </div>

          <div className={styles.whiteBoxTitle}>
            <h2 className={styles.whiteBoxText}>Username</h2>
            <input type="text" id="username" ref={usernameRef} />
          </div>

          <div className={styles.whiteBoxTitle}>
            <h2 className={styles.whiteBoxText}>Email</h2>
            <input type="text" id="email" ref={emailRef} />
          </div>

          <div className={styles.whiteBoxTitle}>
            <h2 className={styles.whiteBoxText}>Password</h2>
            <input type="password" id="password" ref={passwordRef} />
          </div>

          <button className={styles.greenButton} onClick={handleSubmit}>
            Create an Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;