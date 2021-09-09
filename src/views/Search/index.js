import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom"
import axios from "axios";
import Spinner from "../../components/Spinner";

const Search = () => {
  const [films, setFilms] = useState({})
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const params = useParams()


  useEffect(() => {
    axios(`https://api.themoviedb.org/3/search/movie/?query=${params.name}&page=${page}&api_key=9a193411abe2edd82171cfeaf1d75c8c`)
      .then(({data}) => {
        setFilms(data)
        setIsLoading(false)
      })

  }, [page, params.name])
  let pageButtons = ''
  if (page === 1 && films.total_pages > 1) {
    pageButtons = <button onClick={() => setPage(page + 1)}>Next</button>
  } else if (page > 1 && page !== films.total_pages) {
    pageButtons = <>
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </>
  } else if (page === films.total_pages && page !== 1) {
    pageButtons = <button onClick={() => setPage(page - 1)}>Prev</button>
  }

  if (isLoading) {
    return <div className='d-flex justify-content-center'>
      <Spinner/>
    </div>
  }
  return (
    <div className='row'>
      {
        films.results.map(movie =>
          <div className='col-md-3 mb-3' key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt=""/>
            </Link>


          </div>
        )
      }
      <div>{pageButtons}</div>
    </div>
  )
}
export default Search