import { Navbar,Form,Col, Container } from "react-bootstrap";

import './NavBar.css'


import { useDispatch } from "react-redux";
import { getAllMovies, getMoviesSearch } from "../../redux/actions/moviesAction";



export default function NavBar(){



  const onSearch = (word)=>{
    search(word)
  }

  const dispatch = useDispatch();


  const search = async(word)=>{
    if(word === ""){
        dispatch(getAllMovies())
    }else{
        dispatch(getMoviesSearch(word))

    }
    
  }

    
  
    return(
        <Navbar className="NavBar">
        <Container>
        
    
            <Col className="ContentNavBar" >
            
              <Form.Control 
                type="text"
                placeholder="... ابحث   "
                className="search"
                onChange={(e)=> onSearch(e.target.value)}
              />
              <a href="/" >الرئيسية</a>
            </Col>
        </Container>
      </Navbar>
    )
}