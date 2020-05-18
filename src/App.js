import React, { Fragment } from 'react';
import Navbar from './components/layout/NavBar';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom'
import './App.css';
import Index from './components/layout/Index';
import { Provider } from './context';
import Lyrics from './components/tracks/Lyrics';

function App() {
  return (
    <Provider>
    <Router>
    <Fragment>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route path="/" exact={true} component={Index}></Route>
          <Route path="/lyrics/tracks/:id" exact={true} component={Lyrics}></Route>
        </Switch>
      </div>
    </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
