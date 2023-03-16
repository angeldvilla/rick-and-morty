import { ADD_FAVORITES, REMOVE_FAVORITES, REMOVE_FAVORITE_CHARACTER } from "./types";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };

    case REMOVE_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
      };

    case REMOVE_FAVORITE_CHARACTER:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((favorite) => favorite.id !== action.payload),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
