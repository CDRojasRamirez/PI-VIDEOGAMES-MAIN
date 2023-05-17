import { useDispatch } from "react-redux"
import { GET_ALL_GAMES, FILTRAR_DESTINO, RESET, FILTRAR_GENRE, FILTRAR_ORDER, GET_GAME_BY_NAME, ADD_FAVORITES, DELETE_FAVORITES } from "./action-type"
import axios from "axios"



export const getAllGames = (character) => {

    return {
        type: GET_ALL_GAMES,
        payload: character
    }
}

export const getGameByName = (name) => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:3001/videogames/name?name=${name}`);
        const game = response.data;
        dispatch({
          type: GET_GAME_BY_NAME,
          payload: game,
        });
      } catch (error) {
        console.error(error);
      }
    };
  };

export const filtrarDestino = (value) => {

    
    
    return { type: FILTRAR_DESTINO, payload: value}
}

export const filtrarGenre = (value) => {

    
    
    return { type: FILTRAR_GENRE, payload: value}
}

export const filtrarOrder = (value) => {

    
    
    return { type: FILTRAR_ORDER, payload: value}
}

export const reset = () => {

    return { type: RESET }
}

export const addFavorites = (ID) => {

  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/videogames/${ID}`);
      const gameFav = response.data;
      dispatch({
        type: ADD_FAVORITES,
        payload: gameFav,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export const deleteFavorites = (ID) => {

  return { type: DELETE_FAVORITES, payload: ID}
}