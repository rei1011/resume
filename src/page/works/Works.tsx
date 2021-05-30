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
  const [typeOfChange, setTypeOfChange] = useState("");
  const [directionOfChange, setDirectionOfChange] = useState("");
  const changeWorkIndex = (index: number) => {

    //クリックの間引き処理
    if(typeOfChange) return;

    if(workIndex === index) return;

    setTypeOfChange("fade-out");
    if(workIndex < index) {
      setDirectionOfChange("top-to-bottom");
    } else if (workIndex > index) {
      setDirectionOfChange("bottom-to-top");
    }
    setTimeout(
      () => {
        setWorkIndex(index);
        setTypeOfChange("fade-in");
        setTimeout(() => {
          setTypeOfChange("");
          setDirectionOfChange("");
        }, 180);
      },180);
  };
  

  return (
    <ContentsWrapper>
      <div className={getClassName(typeOfChange, directionOfChange)}>  
        <WorkList works={workJson.works}
                  workIndex={workIndex}
                  typeOfChange={typeOfChange}
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


const getClassName = (typeOfChange: string, directionOfChange: string) => {
  const classNameList = ["works-wrapper", "flex", "fit", `${directionOfChange}`, `${typeOfChange}`];
  return classNameList.join(" ");
}