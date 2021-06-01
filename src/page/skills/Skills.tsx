import React from 'react';
import ContentsWrapper from '../../common/ContentsWrapper';
import SkillSet from './SkillSet';


export type skillsJsonType = {
  "frontend": string[]
  "design": string[]
  "backend": string[]
  "others": string[]
}
let skillsJson: skillsJsonType


export default function Skills() {
  return (
    <ContentsWrapper className="skills">
      <div className="skill-sec">
        <div className="sec-title">
          Frontend
        </div>
        <div>
          <SkillSet skills={skillsJson.frontend} />
        </div>
      </div>
      <div className="skill-sec">
        <div className="sec-title">
          Design
        </div>
        <div>
          <SkillSet skills={skillsJson.design} />
        </div>
      </div>
      <div className="skill-sec">
        <div className="sec-title">
          Backend
        </div>
        <div>
          <SkillSet skills={skillsJson.backend} />
        </div>
      </div>
      <div className="skill-sec">
        <div className="sec-title">
          Others
        </div>
        <div>
          <SkillSet skills={skillsJson.others} />
        </div>
      </div>
    </ContentsWrapper>
  );
}


export const getSkillsData = () => {
  return fetch('data/skills.json')
          .then(res => res.json())
          .then(resJson => {
            skillsJson=resJson
          });
}