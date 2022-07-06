import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";

const Header =() =>{
  const [search, setSearch] = useState('') 
  const history = useHistory()
  const handleClick =()=>{
    if(search.trim()){
      history.push(`/search/${search}`)
    }
  }

  const handleSearch = (e) =>{
    setSearch(e.target.value)
  }

  return (
    <header className='bg-dark navbar-dark text-white p-5'>
      <div className='d-flex justify-content-between' >
        <Link className='logo_title'to='/'>NetCinema</Link>
        <div >
          <input type="text" onKeyPress={event => {if(event.key==="Enter")handleClick()}} onChange={handleSearch} placeholder='Search ...'/>
          <button type="button" onClick={handleClick}>Search</button>
          {/* <Link to={`/search/${search}`} >Search</Link> */}
        </div>

      </div>

    </header>
  )
}

export default Header