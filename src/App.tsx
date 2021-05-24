import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './page/home/Home';
import Works from './page/works/Works';
import Skills from './page/skills/Skills';
import Contact from './page/contact/Contact';
import Header from './common/Header';


export default function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="padding_global fit">
      <Router>
        <Header onChangePage={(page:string) => setPage(page)} />
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

export const pageInfo:any = {
  home: "HOME",
  works: "WORKS",
  skills: "SKILLS",
  contact: "CONTACT",
}