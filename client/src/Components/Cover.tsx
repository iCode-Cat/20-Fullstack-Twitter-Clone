import React from 'react';
import { useState } from '../hooks/useReduxTools';

const Cover = () => {
  const state = useState();
  const { user } = state;

  return (
    <div>
      <div
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${user?.profile?.coverPic})`,
        }}
        className='w-[100] h-[168px] md:h-[297px]'
      ></div>
    </div>
  );
};

export default Cover;
