import React from 'react';
import { setWorkIndex } from './WorkList';
import { work } from './Works';


type workRowProps = {
  work: work
  active: string
  index: number
  setWorkIndex: setWorkIndex
}


const WorkRow = (props: workRowProps) => {
  const {work, index, setWorkIndex} = props
  const {start, end, overview} = work;
  const term = getTerm(start, end);
  return (
    <li className={props.active}>
      <div className="work_row-wrapper flex">
        <div onClick={() => setWorkIndex(index)}>
          <div className="term margin-bottom">
            {term}
          </div>
          <div className="overview font-size-l">
            {overview}
          </div>
        </div>
      </div>
    </li>
  );
}
export default WorkRow;


const getTerm = (start: string, end: string | null) => {
  if(!end) {
    return start;
  }
  if(end === "progress"){
    return `${start} - `;  
  }
  return `${start} - ${end}`;
}