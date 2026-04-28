import Movie from "./Movie";
import './style.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Paginate from "../Paginate/Paginate";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../../redux/actions/moviesAction";

import { Row, Container } from "react-bootstrap";
import NavBar from "../NavBar/NavBar";

export default function AllMovies(){

    const [movies,setMovies] = useState([]);
    const [totlePages, setTotlePages] = useState()


    const dispatch = useDispatch();

    
    useEffect(() => {
            
        dispatch(getAllMovies())
        
      }, []);



    const dataAllMovies = useSelector((state)=> state.movies)


    useEffect(()=>{
        setMovies(dataAllMovies)

    },[dataAllMovies])

    return(
        <div>
        <NavBar/>
        
        <Container>
            <Row className="AllMovies"  >
                    {
                        movies.length >= 1 ? (movies.map((mo)=>{
                            return(<Movie movies={mo} />)
                        })) : <h1 style={{textAlign:'center'}} >لا توجد افلام</h1>
                    }
                <Paginate/>
            </Row>
        </Container>
        </div>
    )
}