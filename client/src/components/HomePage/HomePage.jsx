import style from './HomePage.module.css'

import Cards from '../Cards/Cards'
const HomePage = () => {

    

    return (
        <div >
            <input type="text" className={style.input} />
            <Cards />
        </div>
    );
}

export default HomePage; 