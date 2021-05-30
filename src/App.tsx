import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  withRouter
} from 'react-router-dom';
import Home from './page/home/Home';
import Works from './page/works/Works';
import Skills from './page/skills/Skills';
import Contact from './page/contact/Contact';
import Header from './common/Header';


const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  return (
    <div className={`padding_global fit`}>
      <Router>
        <Header onChangePage={(page:string) => setCurrentPage(page)} />
        <Switch>
          <Route path="/resume" exact>
            <Home />
          </Route>
          <Route path="/resume/works" exact>
            <Works />
          </Route>
          <Route path="/resume/skills" exact>
            <Skills />
          </Route>
          <Route path="/resume/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

export const pageInfo = ["home","works","skills","contact"];