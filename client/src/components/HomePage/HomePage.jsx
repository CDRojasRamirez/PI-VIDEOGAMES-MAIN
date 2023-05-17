import style from './HomePage.module.css'
import Footer from '../Footer/Footer';

import Cards from '../Cards/Cards'
const HomePage = ({character, loading}) => {

    return (
        <div className={style.containerHomePage}>
            
            <div className={style.containerCards}>
                <Cards key={character.ID} character={character} loading={loading} />
                <Footer />
            </div>
            
            
        </div>
    );
}

export default HomePage; 