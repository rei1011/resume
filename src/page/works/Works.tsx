import React, { useState } from 'react';
import ContentsWrapper from '../../common/ContentsWrapper';
import WorkDetail from './WorkDetail';
import WorkList from './WorkList';
import throttle from "lodash/throttle";


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
  const [isFadeOut, setIsFadeOut] = useState(false);
  const [isFadeIn, setIsFadeIn] = useState(false);
  const [typeOfChange, setTypeOfChange] = useState("");
  const changeWorkIndex = (index: number) => {
    setIsFadeOut(true);
    if(workIndex < index) {
      setTypeOfChange("top-to-bottom");
    } else if (workIndex > index) {
      setTypeOfChange("bottom-to-top");
    }
    setTimeout(
      () => {
        setWorkIndex(index);
        setIsFadeOut(false);
        setIsFadeIn(true);
        setTimeout(() => {
          setIsFadeIn(false);
          setTypeOfChange("");
        }, 400);
      },
      400);
  };
  

  return (
    <ContentsWrapper>
      <div className={getClassName(isFadeOut, isFadeIn, typeOfChange)}>  
        <WorkList works={workJson.works} 
                  workIndex={workIndex} 
                  changeWorkIndex={changeWorkIndex}/>
        <WorkDetail works={workJson.works} 
                    workIndex={workIndex} />
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


const getClassName = (isFadeOut: boolean, isFadeIn: boolean, typeOfChange: string) => {
  const classNameList = ["works-wrapper", "flex", "fit", `${typeOfChange}`];
  if(isFadeOut) {
    classNameList.push("fade-out");
  }
  if(isFadeIn) {
    classNameList.push("fade-in");
  }

  return classNameList.join(" ");
}