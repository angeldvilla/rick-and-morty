import {
  ADD_FAVORITES,
  REMOVE_FAVORITES,
  REMOVE_FAVORITE_CHARACTER,
  FILTER,
  ORDER,
} from "./types";

import axios from 'axios';

/* export const addFavorites = (character) =>{
  return{
    type : ADD_FAVORITES,
    payload : character,
  }
} */

export const addFavorites = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character)
    .then(({ data }) => {
      return dispatch({
        type: ADD_FAVORITES,
        payload: data,
      });
    });
  };
};

/* export const removeFavorites = (id) => {
    return {
        type : REMOVE_FAVORITES,
        payload : id,
    }
} */

export const removeFavorites = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint)
    .then(({ data }) => {
      return dispatch({
        type: REMOVE_FAVORITES,
        payload: data,
      });
    });
  };
};

export const removeFavoriteCharacter = (id) => {
  return {  
    type : REMOVE_FAVORITE_CHARACTER,
    payload : id
  };
}

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};
