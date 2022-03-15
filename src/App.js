import Movies from "./views/Movies/Movies";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './style.css'
import MovieDetails from "./views/MovieDetails/MovieDetails";
import Header from "./components/Header";
import Search from "./views/Search";
import AboutPerson from "./views/AboutPerson";

function App() {
  return (

    <Router>
      <Header/>
      <Switch>
        <div className='container my-5'>
          <Route exact path='/'><Movies/></Route>
          <Route path='/movie/:id'><MovieDetails/></Route>
          <Route path="/search/:name"><Search/></Route>
          <Route path='/person/:id'><AboutPerson/></Route>
        </div>
      </Switch>

    </Router>


  );
}

export default App;
