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


type AppContextType = {
  currentPage: string;
  setCurrentPage: React.Dispatch<string>;
  typeOfChange: string;
  setTypeOfChange: React.Dispatch<string>;
  directionOfChange: string;
  setDirectionOfChange: React.Dispatch<string>;
};


export const AppContext = React.createContext({} as AppContextType);
export const pageInfo = ["home","works","skills","contact"];
const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [typeOfChange, setTypeOfChange] = useState("");
  const [directionOfChange, setDirectionOfChange] = useState("");
  return (
    <div className={`app padding_global fit ${typeOfChange} ${directionOfChange}`}>
      <Router>
      <AppContext.Provider value={{currentPage, 
                                  setCurrentPage,
                                  typeOfChange,
                                  setTypeOfChange,
                                  directionOfChange,
                                  setDirectionOfChange}}>
        <Header />
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
        </AppContext.Provider>
      </Router>
    </div>
  );
}
export default App;