import React from 'react';


type linkPropsType = {
  link: string;
  children?: any;
}

export default function Link (props: linkPropsType) {
  return (
    <div className={`link`}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    </div>
  );
}
