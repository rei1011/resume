import React from 'react';
import WorkRow from './WorkRow';
import Works, {work, workJson } from './Works';


export type setWorkIndex = (workIndex: number) => void
type workListProp = {
  works: work[]
  workIndex: number
  setWorkIndex: setWorkIndex
}


const WorkList = (props: workListProp) => {
  const list: any[] = [];
  props.works.forEach((work, index) => {
    const active =  props.workIndex === index ? "active" : "";
    list.push(
      <WorkRow key={work.overview} 
               work={work} 
               active={active} 
               index={index} 
               setWorkIndex={props.setWorkIndex}/>
    )
  })

  return (
    <div className="work-list fit">
      <ul className="flex fit column space-between">
        {list}
      </ul>
    </div>
  )
}
export default WorkList