import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CountryDetail from './Components/CountryDetail/CountryDetail';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {


  return (
    <Router>
      <h1 className='text-center text-primary p-3'>Countries of the world</h1>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/country/:countryName'>
          <CountryDetail />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
