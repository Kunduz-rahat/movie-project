import React from "react";
import {Link} from "react-router-dom";

const CinemaList =({films}) =>{
  return (
    <div  className='row'>
      {
        films.map(item => (
          <div key={item.id} className='col-md-3 mb-3'>
            <Link to={`/movie/${item.id}`}>
              <div className='my-3'>{item.original_title}</div>
              <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.backdrop_path}`} alt=""/>
            </Link>
          </div>

        ))
      }
    </div>
  )

}
export default CinemaList