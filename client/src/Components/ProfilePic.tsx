import React from 'react';

interface IProps {
  src: string;
}

const ProfilePic: React.FC<IProps> = ({ src }) => {
  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${src})`,
      }}
      className='absolute overflow-hidden w-[116px] h-[116px] bg-[#000] rounded-[8px] border-4 border-[#FFF]  top-[-84px] md:w-[152px] md:h-[152px] md:top-[-60px] md:left-[2.4rem] '
    ></div>
  );
};

export default ProfilePic;
