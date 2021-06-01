import React from 'react';
import {
  useHistory,
  withRouter,
} from 'react-router-dom';
import { AppContext, pageInfo } from '../App';

const GlobalMenu = () => {
  return (
    <div className={"menu_inline flex"}>
      <ul>
        <MenuItem key="HOME" title="HOME" page="home" />
        <MenuItem key="WORKS" title="WORKS" page="works" />
        <MenuItem key="SKILLS" title="SKILLS" page="skills" />
        <MenuItem key="CONTACT" title="CONTACT" page="contact" />
      </ul>
    </div>
  );
}
export default withRouter(GlobalMenu);


type menuItemProps = {
  title: string;
  page: string;
}
const MenuItem: React.FC<menuItemProps> = ({title, page}) => {
  const {currentPage, setCurrentPage, typeOfChange, setTypeOfChange, setDirectionOfChange}= React.useContext(AppContext)
  const history = useHistory();
  const historyPush = (page: string) => {

    if(typeOfChange) return;

    if(currentPage === page) return;

    setTypeOfChange("fade-out");
    if(pageInfo.indexOf(currentPage) < pageInfo.indexOf(page)) {
      setDirectionOfChange("top-to-bottom");
    } else if (pageInfo.indexOf(currentPage) > pageInfo.indexOf(page)) {
      setDirectionOfChange("bottom-to-top");
    }

    setTimeout(
      () => {
        setCurrentPage(page);
        if(page==="home") {
          history.push(`/resume/`);
        } else {
          history.push(`/resume/${page}`)
        }
        setTypeOfChange("fade-in");
        setTimeout(() => {
          setTypeOfChange("");
          setDirectionOfChange("");
        }, 180)
      }, 180)
  }

  return (
    <>
      <li className="item-wrapper">
        <button onClick={() => historyPush(page)}>
          {title}
        </button>
      </li>
    </>
  )
}