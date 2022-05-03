import React from 'react';
import Cover from '../Components/Cover';
import Profile from '../Components/Profile';
import { useHookState } from '../hooks/useReduxTools';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import useFetchExtra from '../hooks/useFetchExtra';

export const Home = () => {
  const { id } = useParams();
  const { user } = useHookState();
  // const [someone, setSomeone] = useState('')

  const [data, loading, error] = useFetchExtra({
    route: `/api/auth/profile/${id || user?.profile?.userId}`,
    method: 'get',
  });

  if (loading)
    return <div className='grid place-content-center h-[82vh]'>Loading...</div>;

  return (
    <div className='relative'>
      <div>
        <Cover />
      </div>
      <div className='p-[0_1.6rem]'>
        <Profile profile={data} />
      </div>
    </div>
  );
};
