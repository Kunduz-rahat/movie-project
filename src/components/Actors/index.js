import React from "react";
import {Link} from "react-router-dom";


const ActorsList =({actors}) =>{
  return (
    <div className='actors_list'>
      {
        actors.map((item, idx) => (
          <div key={idx}>
            <Link to={`/person/${item.id}`} >
              <img className='actors_list_img'
                   src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.profile_path}`} alt={item.character}/>
              <h3>{item.name}</h3>
            </Link>
          </div>

          )
        )
      }
    </div>
  )
}
export default ActorsList