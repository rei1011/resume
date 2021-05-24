import React from 'react';
import {
  useHistory,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';
import { onChangePage } from './Header';


interface globalMenuType extends RouteComponentProps<any> {
  onChangePage: onChangePage
}
const GlobalMenu = (props: globalMenuType) => {
  return (
    <div className={"menu_inline flex"}>
      <ul>
        <MenuItem key="HOME" title="HOME" page="" />
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
  const history = useHistory();
  return (
    <>
      <li className="item-wrapper">
        <button onClick={() => history.push(`/resume/${page}`)}>
          {title}
        </button>
      </li>
    </>
  )
}