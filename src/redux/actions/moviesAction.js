import axios from "axios";
import { ALLMOVIES, MoviesAPI } from "../types/moviesTypes";
import { type } from "@testing-library/user-event/dist/type";

export const getAllMovies= ()=>{

    // this no dispatch but i can named it any name
    //this following thunk
    return async (dispatch)=>{
        const res = await axios.get(MoviesAPI)
        console.log(res.data.results);
        dispatch({type:ALLMOVIES, data: res.data.results, pages: res.data.total_pages})
    }

}

export const getMoviesSearch = (word)=>{
    return async (dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=23346d00bedb77e87edd88d98a87da34&query=${word}&language=ar`)
        dispatch({type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages})

    }
}

export const getPageMovies = (page) => {
    return async (dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=23346d00bedb77e87edd88d98a87da34&language=ar-US&page=${page}`)
        dispatch({type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages})
    }
}