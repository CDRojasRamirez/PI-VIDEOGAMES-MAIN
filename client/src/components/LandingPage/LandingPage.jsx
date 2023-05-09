import style from './LandingPage.module.css'
import { Link } from 'react-router-dom';

const LandingPage = () => {


    return (
        <div className={style.container} >
            <img src="/img/yorutroll.jpg" alt="ImageF" className={style.imgStyle}/>
            <Link to='/home'>
                <button className={style.button} >Home</button>
            </Link>
        </div>
    );
}

export default LandingPage; 