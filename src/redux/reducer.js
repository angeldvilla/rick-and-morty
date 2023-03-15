import { addFavorites } from "./action";
import { ADD_FAVORITES, REMOVE_FAVORITES } from "./types";

const initialState = {
    myFavorites : []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case ADD_FAVORITES:
            return {
            ...state,
            myFavorites : [...state.myFavorites, action.payload]
            }
        
        case REMOVE_FAVORITES:
            return{
                ...state,
                myFavorites : state.myFavorites.filter((char) => char.id !== action.payload)
            }

        default: return{...state}
    }
}


export default rootReducer;