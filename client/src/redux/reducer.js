import { ADD_FAVORITES, DELETE_FAVORITES, FILTRAR_DESTINO, FILTRAR_GENRE, FILTRAR_ORDER, GET_ALL_GAMES, GET_GAME_BY_NAME, RESET } from "./action-type";
import axios from "axios";

const initialState = {
  charactersGlobal: [],
  filteredCharacters: [],
  myFavorites: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_GAMES:
      return {
        ...state,
        charactersGlobal: action.payload,
        filteredCharacters: [], // Reiniciar los personajes filtrados al obtener todos los juegos
      };
      case GET_GAME_BY_NAME:
    
      return {
        ...state,
        filteredCharacters: [...action.payload],
      }
    case RESET:
      return {
        ...state,
        filteredCharacters: [], // Reiniciar los personajes filtrados
      };
    case FILTRAR_DESTINO:
      const isDbSelected = action.payload === "db";
      const filteredCharacters =  state.charactersGlobal.filter((char) => {
        return isDbSelected ? isNaN(Number(char?.ID)) : !isNaN(Number(char?.ID));
      }) 
      return {
        ...state,
        filteredCharacters: [...filteredCharacters], // Mantener los personajes filtrados en una propiedad separada
      };

      case FILTRAR_GENRE:
        const filteredGenres = state.charactersGlobal.filter((char) => char.VideogameGenre.includes(action.payload))
  
        return {
          ...state,
          filteredCharacters: [...filteredGenres], // Mantener los personajes filtrados en una propiedad separada
        }; 

        case FILTRAR_ORDER:
            const filteredOrder =  state.charactersGlobal.sort((a, b) => {
                if(action.payload === "asc"){

                    return a.ID - b.ID
                }
                else return b.ID - a.ID
                
            })
            
      
            return {
              ...state,
              filteredCharacters: [...filteredOrder], // Mantener los personajes filtrados en una propiedad separada
            };
            
         case ADD_FAVORITES: 
         
        //  state.myFavorites.push(action.payload)

         return {
          ...state,
          myFavorites: [...state.myFavorites, action.payload]
         }
        
         case DELETE_FAVORITES: 

         const newMyFavorites = state.myFavorites.filter(fav => fav.ID !== action.payload)
         return {
          ...state,
          myFavorites: [...newMyFavorites]
         }
    default:
      return state;
  }
};
