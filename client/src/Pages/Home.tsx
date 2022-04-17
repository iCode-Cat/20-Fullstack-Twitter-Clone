import React from 'react';
import Cover from '../Components/Cover';
import Profile from '../Components/Profile';
import { useState } from '../hooks/useReduxTools';

export const Home = () => {
  const { user } = useState();
  return (
    <div className='relative'>
      <div>
        <Cover />
      </div>
      <div className='p-[0_1.6rem]'>
        <Profile profile={user.profile} />
      </div>
    </div>
  );
};
