import React from 'react';
import SkillCard from './SkillCard';
import { skillsJson } from './Skills';


export type skillSetProps = {
  skills: string[]
}


export default function SkillSet(props: skillSetProps) {
  const list: any[] = [];
  props.skills.forEach(skill => {
      list.push(
        <SkillCard skill={skill} />
      )
    }
  )
  return (
    <div className="flex flex-wrap-wrap justify-content-start">
      {list}
    </div>
  );
}
