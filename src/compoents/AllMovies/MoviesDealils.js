import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap";

import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";



export default function MoviesDetalils(){

    const prams = useParams()

    const [detailes , setDetailes] = useState(1);

    const getDetailes = async () =>{
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${prams.id}?api_key=23346d00bedb77e87edd88d98a87da34&language=ar-US&page=1%E2%80%8F`);
        setDetailes(res.data)
        console.log(res.data);
        console.log(res.data.title);
        
    }

    useEffect(()=>{
        getDetailes()
    },[])

    return(
        <div>
            <NavBar/>

            <Container>
                
                <div className="MoviesDetalils" >
                    <div className="PhotoAndText" >
                        <img src={`https://image.tmdb.org/t/p/w500/` + detailes.backdrop_path} />
                        <div className="text" >
                            <p className="p" >اسم الفلم  : {detailes.title}</p>
                            <p className="p" > تاريخ الاصدار : {detailes.release_date}</p>
                            <p className="p" > عدد التقيمات : {detailes.vote_count} </p>
                            <p className="p" >متوسط التقييم : {detailes.vote_average}</p>
                        </div>
                    </div>
                    <div className="DisAndButton" >
                        <p>القصة  : {detailes.overview}</p>
                        <div className="button" >
                            <a href="/" > الرئيسية</a>
                            <a href={detailes.homepage} > مشاهدة الفلم</a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
        
    )
}