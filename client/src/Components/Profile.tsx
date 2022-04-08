import { useState } from '../hooks/useReduxTools';
import Button from './Button';

const Profile = () => {
  const state = useState();
  const { user } = state;

  return (
    <div
      style={{ boxShadow: '0px 2px 4px 0px #0000000D' }}
      className='max-w-[1073px] w-[100%] h-[246px]  m-[0_auto] bg-[#FFFFFF] grid justify-center justify-items-center relative rounded-[12px] md:grid-cols-[0fr_1fr] md:justify-start md:justify-items-start'
    >
      <div
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${user?.profile?.profilePic})`,
        }}
        className='absolute overflow-hidden w-[116px] h-[116px] bg-[#000] rounded-[8px] border  top-[-84px]'
      ></div>

      <div className='mt-[44px] text-center p-[0_2.8rem_2.3rem_2.8rem] md:col-[2/3] grid justify-items-center md:justify-items-start md:grid-cols-[0fr_1fr] w-[100%] md:grid-rows-[0fr_0fr]'>
        <p className='font-[600] font-[Poppins] leading-[36px] text-[2.4rem] text-[#333333]'>
          Devran
        </p>

        <div className='grid justify-items-center md:justify-items-start md:grid-cols-[1fr_1fr] w-[100%]'>
          <div className='grid grid-flow-col gap-[4rem] leading-[18px] mt-[0.4rem]  font-[Poppins] font-[600] text-[1.2rem] '>
            <p>
              2,569 <span className='font-[500] opacity-80'>Following</span>
            </p>
            <p>
              10.8K <span className='font-[500] opacity-80'>Followers</span>
            </p>
          </div>
          <p className='text-[1.8rem] leading-[24px] text-[#828282] md:col-[1/3] md:hidden'>
            Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
          </p>
          <div className='md:col-[3/4] mt-[2.5rem] md:mt-[0rem]  '>
            <Button text='Follow' />
          </div>
        </div>
        <p className='text-[1.8rem] leading-[24px] text-[#828282] md:col-[1/3] hidden md:block'>
          Photographer & Filmmaker based in Copenhagen, Denmark ✵ 🇩🇰
        </p>
      </div>
    </div>
  );
};

export default Profile;
