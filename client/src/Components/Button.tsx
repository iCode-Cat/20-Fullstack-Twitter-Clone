import React from 'react';

interface IProps {
  text: string;
  icon?: string;
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=' bg-[#2F80ED] text-[#FFF] text-[1.2rem] p-[0.8rem_2.4rem] rounded-[4px]'
    >
      {text}
    </button>
  );
};

export default Button;
