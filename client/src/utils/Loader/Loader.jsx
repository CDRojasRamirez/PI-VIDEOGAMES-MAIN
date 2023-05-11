
import style from './Loader.module.css'

const Loader = () => {
  return (
      <>
  <div className={style["box-of-star1"]} style={{"background":"none"}} >
    <div className={style.star + " " + style["star-position1"]} />
    <div className={style.star + " " + style["star-position2"]} />
    <div className={style.star + " " + style["star-position3"]} />
    <div className={style.star + " " + style["star-position4"]} />
    <div className={style.star + " " + style["star-position5"]} />
    <div className={style.star + " " + style["star-position6"]} />
    <div className={style.star + " " + style["star-position7"]} />
  </div>
  <div className={style["box-of-star2"]} style={{"background":"none"}} >
    <div className={style.star + " " + style["star-position1"]} />
    <div className={style.star + " " + style["star-position2"]} />
    <div className={style.star + " " + style["star-position3"]} />
    <div className={style.star + " " + style["star-position4"]} />
    <div className={style.star + " " + style["star-position5"]} />
    <div className={style.star + " " + style["star-position6"]} />
    <div className={style.star + " " + style["star-position7"]} />
  </div>
  <div className={style["box-of-star3"]} style={{"background":"none"}} >
    <div className={style.star + " " + style["star-position1"]} />
    <div className={style.star + " " + style["star-position2"]} />
    <div className={style.star + " " + style["star-position3"]} />
    <div className={style.star + " " + style["star-position4"]} />
    <div className={style.star + " " + style["star-position5"]} />
    <div className={style.star + " " + style["star-position6"]} />
    <div className={style.star + " " + style["star-position7"]} />
  </div>
  <div className={style["box-of-star4"]} style={{"background":"none"}} >
    <div className={style.star + " " + style["star-position1"]} />
    <div className={style.star + " " + style["star-position2"]} />
    <div className={style.star + " " + style["star-position3"]} />
    <div className={style.star + " " + style["star-position4"]} />
    <div className={style.star + " " + style["star-position5"]} />
    <div className={style.star + " " + style["star-position6"]} />
    <div className={style.star + " " + style["star-position7"]} />
  </div>
  <div data-js="astro" className={style.astronaut} style={{"background":"none"}} >
    <div className={style.head} />
    <div className={style.arm + " "+ style["arm-left"]} />
    <div className={style.arm + " "+ style["arm-right"]} />
    <div className={style.body}>
      <div className={style.panel}/>
    </div>
    <div className={style.leg + " "+ style["leg-left"]} />
    <div className={style.leg + " "+ style["leg-right"]} />
    <div className={style.shoolbag} />
  </div>
</>

  );
};

export default Loader;
