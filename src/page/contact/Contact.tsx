import React from 'react';
import ContentsWrapper from '../../common/ContentsWrapper';
import Link from '../../common/Link';

export default function Contact() {
  return (
    <ContentsWrapper className="contact flex">
      <Link link="mailto:r.mizobuchi3@gmail.com">
        Email
      </Link>
      <Link link="https://github.com/rei1011" >
        Github
      </Link>
      <Link link="https://www.linkedin.com/in/%E5%B6%BA-%E6%BA%9D%E6%B8%95-27649a180">
        Linked In
      </Link>
      <Link link="https://www.facebook.com/rei.mizobuchi.9">
        facebook
      </Link>
    </ContentsWrapper>
  );
}
