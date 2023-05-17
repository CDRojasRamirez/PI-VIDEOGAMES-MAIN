import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import HomePage from './components/HomePage/HomePage';
import {Route, Switch} from 'react-router-dom'
import DetailCard from './components/DetailCard/DetailCard';
import FormPage from './components/FormPage/FormPage';
import SearchBar from './components/SearchBar/SearchBar';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import axios from 'axios'
import Login from './components/Login/Login';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset, getAllGames, getGameByName } from './redux/action';
import Favorites from './components/Favorites/Favorites';
import SearchBarFav from './components/SearchBarFav/SearchBarFav';

function App() {


  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation()
  const dispatch = useDispatch()

  const { charactersGlobal } = useSelector( state => state)
  // const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);

      try {
        axios("http://localhost:3001/videogames").then((res) =>
          setCharacter(res.data)
        );
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 300);
    
  }, []);

  const searchBtn = async (game) => {
    // return await axios.get(`http://localhost:3001/videogames/name?name=${game}`)
    // .then(res => setCharacter(res.data))
    dispatch(getGameByName(game))
  }

 



  const handleInicio = () => {

    // try {
    //   axios("http://localhost:3001/videogames").then((res) =>
    //     setCharacter(res.data)
    //   );
    // } catch (err) {
    //   console.error(err);
    // } finally {
    //   setLoading(false);
    // }
    
    return dispatch(reset())
  
  }

  return (
    <div className="App">
      
      { location.pathname === '/' ? <Login /> :
      location.pathname === '/inicio'  ? <LandingPage /> :
      location.pathname === '/favorites' ? <SearchBarFav handleInicio={handleInicio} searchBtn={searchBtn}/>:
      (<SearchBar handleInicio={handleInicio} searchBtn={searchBtn} />)}


      <Switch>
        {/* <Route exact path='/inicio'><LandingPage /></Route> */}
        <Route path='/home'><HomePage character={character} loading={loading}/></Route>
        <Route path='/detail/:IDgame'><DetailCard /></Route>
        <Route path='/creategame'><FormPage /></Route>
        <Route exact path='/favorites'><Favorites /></Route>
      </Switch>
      
    </div>
  );
}

export default App;
