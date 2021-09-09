import React, {useState} from "react";
import {Link} from "react-router-dom";

const Header =() =>{
  const [search, setSearch] = useState('')

  const handleSearch = (e) =>{
    setSearch(e.target.value)
  }

  return (
    <header className='bg-dark navbar-dark text-white p-5'>
      <div className='d-flex justify-content-between' >
        <h3>NetCinema</h3>
        <div >
          <input type="text"  onChange={handleSearch}/>
          <Link to={`/search/${search}`} >Search</Link>
        </div>

      </div>

    </header>
  )
}

export default Header