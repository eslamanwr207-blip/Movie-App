import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPageMovies } from "../../redux/actions/moviesAction";



export default function Paginate(){

    
    const [pageCount,setPagCount] = useState(0);

    
    const dispatch = useDispatch();
    const totle = useSelector((state)=> state.pageCount);


    useEffect(()=>{
        setPagCount(totle)
    })

    const handelPageClik=(data)=>{
        dispatch(getPageMovies(data.selected + 1))
        
    }

    
    return(
        <div>
        <ReactPaginate
        breakLabel="..."
        nextLabel="التالي >"
        onPageChange= {handelPageClik}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={totle}
        previousLabel="< السابق"
        renderOnZeroPageCount={null}
        containerClassName="pagination justify-content-center pt-3"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
        </div>
    )
}