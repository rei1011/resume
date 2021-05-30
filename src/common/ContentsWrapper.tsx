import * as React from 'react';

type Props = {
  className?: string;
}

const ContentsWrapper = (props: React.PropsWithChildren<Props>) => {
  return (
    <div className="fit flex align-items-center justify-content-center">
      <div className={`contents-wrapper fit ${props.className}`}>
        {props.children}
      </div>
    </div>
  );
}
export default ContentsWrapper;