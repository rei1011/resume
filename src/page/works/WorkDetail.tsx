import React from 'react';
import { work, workJson } from './Works';


type workDetailProp = {
  work: work
}
// worklistを押下したxx ms秒後にworkindexを変換する関数を作成する

const WorkDetail = (props: workDetailProp) => {
  const {position, description} = props.work;
  return (
    <div className="work-detail fit flex column space-around">
      <div>
        <div>
          Position
        </div>
        <div className="font-size-l">
          {position}
        </div>
      </div>
      <div>
        <div>
          Job Description
        </div>
        <div className="font-size-l">
          {description}
        </div>
      </div>
    </div>
  );
}
export default WorkDetail;


const WorkDetailTemplate = () => {
  return (
    <>
    </>
  )
}

export const getWorkDetail = () => {
  return (
    <>
    </>
  )
}

