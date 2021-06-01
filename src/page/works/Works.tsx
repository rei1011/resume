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
export type workJsonType = {
  "works": work[]
}
let workJson: workJsonType


const Works = () => {
  const [workIndex, setWorkIndex] = useState(0);
  const [typeOfChangeInWork, setTypeOfChangeInWork] = useState("");
  const [directionOfChange, setDirectionOfChangeInWork] = useState("");
  const changeWorkIndex = (index: number) => {

    //クリックの間引き処理
    if(typeOfChangeInWork) return;

    if(workIndex === index) return;

    setTypeOfChangeInWork("fade-out-work");
    if(workIndex < index) {
      setDirectionOfChangeInWork("top-to-bottom");
    } else if (workIndex > index) {
      setDirectionOfChangeInWork("bottom-to-top");
    }
    setTimeout(
      () => {
        setWorkIndex(index);
        setTypeOfChangeInWork("fade-in-work");
        setTimeout(() => {
          setTypeOfChangeInWork("");
          setDirectionOfChangeInWork("");
        }, 180);
      },180);
  };
  

  return (
    <ContentsWrapper>
      <div className={getClassName(typeOfChangeInWork, directionOfChange)}>  
        <WorkList works={workJson.works}
                  workIndex={workIndex}
                  typeOfChangeInWork={typeOfChangeInWork}
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


const getClassName = (typeOfChangeInWork: string, directionOfChange: string) => {
  const classNameList = ["works-wrapper", "flex", "fit", `${directionOfChange}`, `${typeOfChangeInWork}`];
  return classNameList.join(" ");
}