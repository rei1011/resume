import React from 'react';
import {
  useHistory,
  withRouter,
  RouteComponentProps
} from 'react-router-dom';
import { isPropertySignature } from 'typescript';
import { onChangePage } from './Header';


interface globalMenuType extends RouteComponentProps<any> {
  onChangePage: onChangePage
}
const GlobalMenu = (props: globalMenuType) => {
  return (
    <div className={"menu_inline flex"}>
      <ul>
        <MenuItem key="HOME" title="HOME" page="home" onChangePage={props.onChangePage}/>
        <MenuItem key="WORKS" title="WORKS" page="works" onChangePage={props.onChangePage}/>
        <MenuItem key="SKILLS" title="SKILLS" page="skills" onChangePage={props.onChangePage}/>
        <MenuItem key="CONTACT" title="CONTACT" page="contact" onChangePage={props.onChangePage}/>
      </ul>
    </div>
  );
}
export default withRouter(GlobalMenu);


type menuItemProps = {
  title: string;
  page: string;
  onChangePage: onChangePage
}
const MenuItem: React.FC<menuItemProps> = ({title, page, onChangePage}) => {
  const history = useHistory();
  const historyPush = (page: string) => {
    if(page==="home") {
      history.push(`/resume/`);
    } else {
      history.push(`/resume/${page}`)
    }
  }
  // const onClick = () => {
  //   onChangePage(page);
  //   history.push(`/resume/${page}`);
  // }

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