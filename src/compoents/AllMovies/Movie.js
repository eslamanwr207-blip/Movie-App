import { Col, Row } from "react-bootstrap";

export default function Movie({movies}){


    return(
        <Col  xs="6" sm="6" md="4" lg="3" className="my-1"  >
            <a href={`movie/${movies.id}`} >
                <div className="card"   >
                    <img src={`https://image.tmdb.org/t/p/w500/` + movies.poster_path}  className="card__image" />
                    <div className="card_overlay" >
                        <div className="card_text text-center w-100 p-2"  >
                            <p> اسم الفلم : {movies.title}</p>
                            <p>تاريخ الاصدار  : {movies.release_date}</p>
                            <p> عدد التقيمات: {movies.vote_count}</p>
                            <p>متوسط التقييم: {movies.vote_average}</p>
                        </div>
                    </div>
                </div>
            </a>
        </Col>

    )
}