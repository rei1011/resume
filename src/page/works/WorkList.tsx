import React from 'react';
import WorkRow from './WorkRow';
import Works, {work, workJson } from './Works';


export type setWorkIndex = (workIndex: number) => void | null
type workListProp = {
  works: work[]
  workIndex: number
  changeWorkIndex: setWorkIndex
}


const WorkList = (props: workListProp) => {
  const list: any[] = [];
  props.works.forEach((work, index) => {
    const active =  props.workIndex === index ? "active" : "";
    // TODO 一定時間クリックできない処理を加える
    list.push(
      <WorkRow key={work.overview} 
               work={work} 
               active={active} 
               index={index} 
               setWorkIndex={props.changeWorkIndex}/>
    )
  })

  return (
    <div className="work-list border-right">
      <ul className="flex fit column space-around">
        {list}
      </ul>
    </div>
  )
}
export default WorkList