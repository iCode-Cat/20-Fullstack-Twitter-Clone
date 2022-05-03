import Button from './Button';
import { useHookState } from '../hooks/useReduxTools';

const TweetCreate = () => {
  const state = useHookState();
  const { user } = state;
  console.log(user);

  return (
    <div className='bg-[#FFF] p-[1rem_1.3rem] rounded-[12px]'>
      <p className='mb-[0.74rem] font-[Poppins] font-600 text-[1.2rem] text-[#4F4F4F] leading-[18px] '>
        Tweet something
      </p>
      <div
        style={{ borderTop: '#F2F2F2 1px solid' }}
        className='grid grid-cols-[auto_1fr] pt-[0.86rem]'
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            // background: `url(${user?.profile?.profilePic})`,
            background: 'red',
            backgroundSize: 'cover',
            borderRadius: '8px',
          }}
        />

        <input
          className='pl-[12px] bg-[transparent] h-[80px]'
          placeholder='What’s happening?'
          type='text'
        />
      </div>
      <div className='grid grid-cols-[auto_auto_1fr] items-center gap-[1.3rem] justify-items-end'>
        <img className='w-[16px]' src='/image-solid.svg' alt='upload_image' />
        <div className='grid grid-flow-col items-center gap-[0.7rem]'>
          <img
            className='w-[16px] '
            src='/earth-americas-solid.svg'
            alt='privacy'
          />
          <p className='text-[1.2rem]'>Everyone can reply</p>
        </div>
        <Button text='Tweet' />
      </div>
    </div>
  );
};

export default TweetCreate;
