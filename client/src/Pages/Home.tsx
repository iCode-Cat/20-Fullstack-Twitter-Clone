import React from 'react';
import Cover from '../Components/Cover';
import Profile from '../Components/Profile';

export const Home = () => {
  return (
    <div className='relative'>
      <div>
        <Cover />
      </div>
      <div className='p-[0_1.6rem]'>
        <Profile />
      </div>
    </div>
  );
};
