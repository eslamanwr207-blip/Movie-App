import NavBar from './compoents/NavBar/NavBar';
import AllMovies from './compoents/AllMovies/AllMovies';
import { Container } from 'react-bootstrap';
import Paginate from './compoents/Paginate/Paginate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MoviesDetalils from './compoents/AllMovies/MoviesDealils';


function App() {
  return (
    <div className="">
        <BrowserRouter>
           <Routes>
            <Route path='/' element={<AllMovies/>} />
            <Route path='movie/:id' element={<MoviesDetalils/>} />
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
