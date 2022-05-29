import React, { memo } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useAppSelector } from '../../app/hooks';
import { LogoPage } from '../../assets/svgs';

type Props = {};

function Header({}: Props) {
  const user = useAppSelector((state) => state.userSlice);
  return (
    <header className='flex items-center gap-x-2 h-[50px] bg-[#f0f2f5] dark:bg-darkPrimary mb-2'>
      <div className='w-[250px] flex items-center gap-2'>
        <LogoPage width={40} height={40} fill={'#42fd'} />
        <span className='font-extrabold text-xl text-primary italic'>
          Coreee
        </span>
      </div>
      <div className='w-4/6 flex'>
        <div className='w-1/2 rounded-lg px-4 py-2 border flex gap-x-2 items-center'>
          <FiSearch size='16' />
          <input
            type='text'
            className='w-full outline-none font-medium bg-transparent dark:text-white'
            placeholder='Search for something here...'
            spellCheck='false'
          />
        </div>
      </div>
      <div className='w-1/6 flex justify-end items-center gap-x-2 ml-auto'>
        <span className='font-semibold text-lg'>{user.name}</span>
        <div className='p-px rounded-lg ring-2 ring-primary'>
          <img src={user.imgUrl} alt='' className='w-9 h-9 rounded-lg ' />
        </div>
      </div>
    </header>
  );
}
export default memo(Header);
