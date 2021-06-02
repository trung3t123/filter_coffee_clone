import React, { memo } from 'react';
import Header from 'components/Header';

const PostDetailHeader = () => {
  return (
    <>
      <Header isGoBack />
      {/* <Text>{title}</Text> */}
    </>
  );
};

export default memo(PostDetailHeader);
