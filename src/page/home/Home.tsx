import React from 'react';
import ContentsWrapper from '../../common/ContentsWrapper';
import Link from '../../common/Link';

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
      <div className="item font-size-xl flex">
        <Link link="https://github.com/rei1011" >
          <span className="icon icon-github" />
        </Link>
        <Link link="https://www.linkedin.com/in/%E5%B6%BA-%E6%BA%9D%E6%B8%95-27649a180">
          <span className="icon icon-linkedin2" />
        </Link>
      </div>
    </ContentsWrapper>
  );
}
