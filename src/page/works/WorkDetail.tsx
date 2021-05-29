import React from 'react';
import { work, workJson } from './Works';


type workDetailProp = {
  works: work[]
  workIndex: number
}
const WorkDetail = (props: workDetailProp) => {
  const list = createList(props.works);
  return (
    <div className="work-detail fit flex column space-around">
      {list[props.workIndex].position}
      {list[props.workIndex].description}
    </div>
  )
}
export default WorkDetail;


const createList = (works: work[]) => {
  const list: any[] = [];
  works.forEach(work => {
    list.push(
      {
        position: <Position position={work.position}/>,
        description: <Description description={work.description}/>
      }
    )
  })

  return list;
}


type positionProp = {
  position: string;
}
const Position = (props: positionProp) => {
  return (
    <div>
      <div>
        Position
      </div>
      <div className="font-size-l">
        {props.position}
      </div>
    </div>
  )
}


type descriptionProp = {
  description: string;
}
const Description = (props: descriptionProp) => {
  return (
    <div>
      <div>
        Job Description
      </div>
      <div className="font-size-l">
        {props.description}
      </div>
    </div>
  )
}