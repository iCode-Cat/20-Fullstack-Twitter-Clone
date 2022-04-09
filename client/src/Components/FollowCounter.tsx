import React from 'react';

interface IProps {
  number: number | string;
  text: string;
}

const FollowCounter: React.FC<IProps> = ({ number, text }) => {
  return (
    <p>
      {number} <span className='font-[500] opacity-80'>{text}</span>
    </p>
  );
};

export default FollowCounter;
