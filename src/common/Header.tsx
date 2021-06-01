import React from 'react';
import {
  useLocation,
} from 'react-router-dom';
import GlobalMenu from './GlobalMenu';

const Header = () => {
  return (
    <div className="header flex">
      <Author />
      <div className="menu" >
        <CurrentPage />
        <GlobalMenu />
      </div>
    </div>
  );
}
export default Header;

const CurrentPage = () => {
  const pathNameArray = useLocation().pathname.split("/");
  const pathName = pathNameArray[pathNameArray.length-1];
  return (
    <div className="page-current-wrapper">
      <div className="path-name font-size-xxl">
        {getPageName(pathName)}
      </div>
    </div>
  );
}

const getPageName = (pathName: string) => {
  if(!pathName) {
    return "HOME";
  }

  return pathName.toUpperCase()
}

const Author = () => {
  return (
    <div className="author">
      Rei
    </div>
  );
}