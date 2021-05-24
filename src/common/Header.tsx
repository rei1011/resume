import React from 'react';
import {
  useLocation,
} from 'react-router-dom';
import { pageInfo } from '../App';
import GlobalMenu from './GlobalMenu';

export type onChangePage = (page: string) => void;
export type headerProps = {
  onChangePage: onChangePage;
}
const Header = (props: headerProps) => {
  return (
    <div className="header flex">
      <Author />
      <div className="menu" >
        <CurrentPage />
        <GlobalMenu onChangePage={props.onChangePage}/>
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

  return pageInfo[pathName]
}

const Author = () => {
  return (
    <div className="author">
      Rei
    </div>
  );
}