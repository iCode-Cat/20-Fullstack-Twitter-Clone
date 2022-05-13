import React from 'react';

interface IProps {
  picture?: string;
  title?: string;
  subtitle?: string;
}

const ProfileLabel: React.FC<IProps> = ({ picture = '', title, subtitle }) => {
  return (
    <div className='grid grid-flow-col justify-start items-center gap-[15px]'>
      <div
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${picture})`,
        }}
        className='overflow-hidden w-[40px] h-[40px] bg-slate-700 rounded-[8px]'
      ></div>
      <div>
        {title && (
          <p className='text-[1.6rem] font-[500] font-[poppins] leading-[24px]'>
            {title}
          </p>
        )}
        {subtitle && (
          <p className='text-[1.2rem] text-[#BDBDBD] leading-[12px] font-[500]'>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfileLabel;
