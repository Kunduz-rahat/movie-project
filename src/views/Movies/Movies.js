import React, {useState, useEffect} from "react";
import axios from "axios";
import CinemaList from "../../components/CinemaList/CinemaList";

const Movies = () => {
  const [page, setPage] = useState(1)
  const [films, setFilms] = useState([])

  const handlePage = (num) => {
    setPage(num)
  }
  useEffect(() => {
    axios(`https://api.themoviedb.org/3/discover/movie?page=${page}&api_key=9a193411abe2edd82171cfeaf1d75c8c`)
      .then(({data}) => setFilms(data.results))
  }, [page])
  return (
    <div>
      <div >
        {
          Array(6).fill(0).map((item, idx) =>
            <button type={"button"} className={`btn btn-primary mx-1 ${page===idx+1 && "btn-success"}`} onClick={() => handlePage(idx + 1)}>{idx + 1}</button>
          )
        }
      </div>
      <CinemaList films={films}/>

    </div>
  )
}
  export default Movies