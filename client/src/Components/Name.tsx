import React from 'react';

interface IProps {
  text: string;
}

const Name: React.FC<IProps> = ({ text }) => {
  return (
    <p className='font-[600] font-[Poppins] leading-[36px] text-[2.4rem] text-[#333333]'>
      {text}
    </p>
  );
};

export default Name;
