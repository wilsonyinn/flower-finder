// import React, { useState } from "react";
// import styles from "../css/login-registration.module.css";

// const LoginPage = () => {
//   const [email, setEmail] = useState("name@email.com");
//   const [password, setPassword] = useState("Password");

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch("/api/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert("User successfully logged in!");
//       } else {
//         alert("Login failed: " + data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while logging in.");
//     }
//   };

//   return (
//     <body>
//       <div className={styles.loginNav}>
//         <button className={styles.greenButton}>Join</button>
//       </div>

//       <div className={styles.loginRegisterBackground}>
//         <div className={styles.whiteBox}>
//           <h1 className={styles.whiteBoxText}>Welcome back.</h1>

//           <div className={styles.quickLoginButtons}>
//             <img src="/assets/apple logo.png" alt="Apple logo" />
//             <img src="/assets/google logo.png" alt="Google logo" />
//             <img src="/assets/facebook logo.png" alt="Facebook logo" />
//           </div>

//           <p className={styles.whiteBoxText}>Or, sign in with your email</p>

//           <form id="login-form" onSubmit={handleSubmit}>
//             <div className={styles.whiteBoxTitle}>
//               <h2 className={styles.whiteBoxText}>Email</h2>
//               <input
//                 className={styles.whiteBoxText}
//                 id="email"
//                 type="text"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className={styles.whiteBoxTitle}>
//               <h2 className={styles.whiteBoxText}>Password</h2>
//               <input
//                 className={styles.whiteBoxText}
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <div className={styles.whiteBoxTitle}>
//               <h2 className={styles.whiteBoxText}>Forgot your password?</h2>
//             </div>
//             <button className={styles.greenButton} type="submit">
//               Sign in
//             </button>
//           </form>
//         </div>
//       </div>
//     </body>
//   );
// };

// export default LoginPage;
