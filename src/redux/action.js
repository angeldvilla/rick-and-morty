import { ADD_FAVORITES, REMOVE_FAVORITES } from "./types";


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