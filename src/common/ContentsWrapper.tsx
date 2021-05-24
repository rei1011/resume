import * as React from 'react';

type Props = {}

const ContentsWrapper = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="contents-wrapper fit">
      {props.children}
    </div>
  );
}
export default ContentsWrapper;