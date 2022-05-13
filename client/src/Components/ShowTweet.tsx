import React from 'react';
import ProfileLabel from './ProfileLabel';

interface IProps {
  picture?: string;
  content?: string;
  profilePicture?: string;
  firstName?: string;
  lastName?: string;
}

const ShowTweet: React.FC<IProps> = ({
  picture = '',
  content,
  profilePicture,
  firstName,
  lastName,
}) => {
  return (
    <div className='bg-[#fff] p-[2rem_2.1rem] rounded-[8px]'>
      <ProfileLabel
        picture={profilePicture}
        title={firstName || 'unnamed'}
        subtitle={lastName}
      />
      <p className='mt-[2rem] text-[1.6rem] font-[400] leading-[21px]'>
        {content}
      </p>
      {picture && (
        <div
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${picture})`,
            background: 'red',
            height: '192px',
            width: '100%',
            borderRadius: '8px',
            marginTop: '1.4rem',
          }}
        ></div>
      )}
    </div>
  );
};

export default ShowTweet;
