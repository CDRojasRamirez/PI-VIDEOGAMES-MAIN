import { Link } from "react-router-dom";
import style from "./Login.module.css";

const Login = () => {

  return (
   
    <div className={style.loginContainer}>
  <h2>Login</h2>
  <form className={style.form}>
    <div className={style.formGroup}>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required />
    </div>
    <div className={style.formGroup}>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required />
    </div>
    <button type="submit" className={style.loginButton}>Login</button>
  </form>
</div>


  );
};

export default Login;
