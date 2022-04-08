import { Link } from 'react-router-dom';
import { useState } from '../hooks/useReduxTools';
const Header = () => {
  const lists = ['Home', 'Explore', 'Bookmarks'];
  const state = useState();

  return (
    <header className='flex justify-between items-center p-[1.9rem_2.1rem] md:p-[1.9rem_7.2rem]'>
      <img className='md:hidden' src='/tweeter-small.svg' alt='logo' />
      <img className='hidden md:block' src='/tweeter.svg' alt='logo' />
      <ul className='hidden  md:grid grid-flow-col gap-[8rem] text-[#828282]'>
        {lists.map((list) => (
          <Link to={'/' + list.toLocaleLowerCase()}>
            <li className='cursor-pointer'>{list}</li>
          </Link>
        ))}
      </ul>
      <div className='grid grid-flow-col items-center gap-[1.1rem]'>
        <div
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${state.user?.profile?.profilePic})`,
          }}
          className='overflow-hidden w-[36px] h-[36px] bg-slate-700 rounded-[8px]'
        ></div>
        <p className='hidden md:block text-[1.2rem] font-[700]'>
          Devran Boyaci
        </p>
      </div>
    </header>
  );
};

export default Header;
