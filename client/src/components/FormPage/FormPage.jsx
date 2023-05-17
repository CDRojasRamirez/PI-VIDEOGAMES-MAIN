import { useState } from "react";
import style from './FormPage.module.css'

const FormPage = () => {

  const [showGenres, setShowGenres] = useState(false);

  const toggleGenres = () => {
    setShowGenres(!showGenres);
  };

  return (

    <form className={style.form}>
    <p>Login</p>
    <div className={style.group}>
      <input required="true" className={style.mainInput} type="text" />
      <span className={style.highlightSpan} ></span>
      <label className={style.lebalEmail} >Email</label>
    </div>
    <div className={style.container1}>
      <div className={style.group}>
        <input required="true" className={style.mainInput} type="text" />
        <span className={style.highlightSpan} ></span>
        <label className={style.lebalEmail} >password</label>
      </div>
    </div>
    <button className={style.submit} >submit</button>
  </form>

  );
};

export default FormPage;
