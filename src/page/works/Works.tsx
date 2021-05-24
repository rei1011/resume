import React, { useState } from 'react';
import ContentsWrapper from '../../common/ContentsWrapper';
import WorkDetail from './WorkDetail';
import WorkList from './WorkList';


export type work = {
  "start": string
  "end": string | null
  "overview": string
  "position": string
  "description": string
}
export type workJson = {
  "works": work[]
}
let workJson: workJson


const Works = () => {
  const [workIndex, setWorkIndex] = useState(0);
  return (
    <ContentsWrapper>
      <div className={"works-wrapper flex fit"}>  
        <WorkList works={workJson.works} 
                  workIndex={workIndex} 
                  setWorkIndex={(index: number) => setWorkIndex(index)}/>
        <WorkDetail work={workJson.works[workIndex]} />
      </div>
    </ContentsWrapper>
  );
}
export default Works;


export const getWorksData = () => {
  return fetch('data/works.json')
          .then(res => res.json())
          .then(resJson => {
            workJson=resJson
          });
}