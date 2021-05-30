import React from 'react';
import ContentsWrapper from '../../common/ContentsWrapper';

export default function Home() {
  return (
    <ContentsWrapper className="home">
      <div className="item font-size-xl">
        Rei Mizobuchi
      </div>
      <div className="item font-size-xl">
        Software Enginner 
      </div>
      <div className="item font-size-xl">
        UIUX Lead
      </div>
      <div className="item font-size-xl">
        <span className="icon icon-github" />
        <span className="icon icon-linkedin2" />
      </div>
    </ContentsWrapper>
  );
}
