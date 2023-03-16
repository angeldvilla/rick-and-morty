import { ADD_FAVORITES, REMOVE_FAVORITES, REMOVE_FAVORITE_CHARACTER } from "./types";


export const addFavorites = (character) =>{
  return{
    type : ADD_FAVORITES,
    payload : character,
  }
}


export const removeFavorites = (id) => {
    return {
        type : REMOVE_FAVORITES,
        payload : id,
    }
}

export const removeFavoriteCharacter = (id) => {
  return {  
    type : REMOVE_FAVORITE_CHARACTER,
    payload : id
  };
}