import { useState } from '../hooks/useReduxTools';
import Button from './Button';
import FollowCounter from './FollowCounter';
import Name from './Name';
import ProfilePic from './ProfilePic';

const Profile = () => {
  const state = useState();
  const { user } = state;

  return (
    <div
      style={{ boxShadow: '0px 2px 4px 0px #0000000D' }}
      className='max-w-[1073px] w-[100%] h-[246px] md:h-[163px]  m-[0_auto] bg-[#FFFFFF] grid justify-center justify-items-center relative rounded-[12px] md:grid-cols-[200px_1fr] md:justify-start md:justify-items-start p-[0_2.4rem_2.3rem_2.8rem] md:p-[1.9rem_2.4rem_2.3rem_0rem]'
    >
      <ProfilePic src={user?.profile?.profilePic} />
      <div className='mt-[44px] md:mt-[0] text-center  md:col-[2/3] grid justify-items-center md:justify-items-start md:grid-cols-[auto_1fr] w-[100%] md:grid-rows-[0fr_0fr]  md:gap-[0_2.8rem]'>
        <Name text={'Devran Boyaci'} />
        <div className='grid justify-items-center md:justify-items-start md:grid-cols-[1fr_1fr] w-[100%]'>
          <div className='grid grid-flow-col gap-[4rem] leading-[18px] mt-[0.4rem]  font-[Poppins] font-[600] text-[1.2rem] place-content-center'>
            <FollowCounter number={'2,569'} text='Following' />
            <FollowCounter number={'1,869'} text='Followers' />
          </div>
          <p className='text-[1.8rem] leading-[24px] text-[#828282] md:col-[1/3] md:hidden max-w-[427px]'>
            Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
          </p>
          <div className='md:col-[3/4] mt-[2.5rem] md:mt-[0rem]  '>
            <Button text='Follow' />
          </div>
        </div>
        <p className='md:mt-[2.2rem] text-[1.8rem] leading-[24px] text-[#828282] md:col-[1/3] hidden md:block max-w-[427px] text-left'>
          Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰 n, Denmark
          ✵ 🇩🇰
        </p>
      </div>
    </div>
  );
};

export default Profile;
