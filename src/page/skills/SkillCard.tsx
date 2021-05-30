import React from 'react';


export type skillCardProp = {
  skill: string;
}

export default function SkillCard(props: skillCardProp) {
  return (
    <div className="skill-card-wrapper">
      <div className="skill-card flex align-items-center justify-content-center">
        <div className="content">
          {props.skill}
        </div>
      </div>
    </div>
  );
}
