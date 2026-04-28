import { ALLMOVIES } from "../types/moviesTypes";

const inialValue = { movies: [], pageCount: 0 }

export const movesReducer = (state = inialValue , action)=>{
    switch(action.type){
        case ALLMOVIES:
            return {movies: action.data, pageCount: action.pages}
        default:
            return state;
    }
}

