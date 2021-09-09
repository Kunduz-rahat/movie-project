import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import Spinner from "../../components/Spinner";

const AboutPerson = () => {
  const [actor, setActor] = useState({})
  const [films, setFilms] = useState([])
  const params = useParams()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios(`https://api.themoviedb.org/3/person/${params.id}?&api_key=9a193411abe2edd82171cfeaf1d75c8c`)
      .then(({data}) => {
        setActor(data)
        setIsLoading(false)
      })
  }, [params.id])
  useEffect(()=>{
    axios(`https://api.themoviedb.org/3/person/${params.id}/movie_credits?&api_key=9a193411abe2edd82171cfeaf1d75c8c`)
      .then(({data})=> setFilms(data.cast))
  }, [params.id])
  if (isLoading) {
    return <div className='d-flex justify-content-center'>
      <Spinner/>
    </div>
  }

  return (
    <div className='row'>
      <div className='col-md-3'>
        <img
             src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${actor.profile_path}`} alt=""/>
      </div>
<div className='col-md-9'>
  <h1>{actor.name}</h1>
  <div>{actor.biography? `Biography: ${actor.biography}` : `We do not have a biography about ${actor.name} :((`}</div>
</div>


    </div>
  )
}
export default AboutPerson