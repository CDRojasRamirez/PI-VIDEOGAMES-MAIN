import style from './HomePage.module.css'
import { Link } from 'react-router-dom';

import Cards from '../Cards/Cards'
const HomePage = () => {

    return (
        <div className={style.containerHomePage}>
            
            <div className={style.containerCards}>
                <Cards />
            </div>
            
        </div>
    );
}

export default HomePage; 