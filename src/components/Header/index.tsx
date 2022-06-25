import React, { memo } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useAppSelector } from '../../app/hooks';
import { LogoPage } from '../../assets/svgs';

type Props = {
  className: string;
};

function Header({ className }: Props) {
  const user = useAppSelector((state) => state.userSlice);
  return (
    <header className={className}>
      <div className='w-[250px] flex items-center gap-2'>
        <LogoPage width={40} height={40} fill={'#42fd'} />
        <span className='font-extrabold text-xl text-primary italic'>
          Coreee
        </span>
      </div>
      <div className='w-4/6 flex'>
        <div className='w-1/2 rounded-lg px-4 py-2 dark:bg-darkSecondary flex gap-x-2 items-center bg-white'>
          <FiSearch size='16' />
          <input
            type='text'
            className='w-full font-medium bg-transparent dark:text-white outline-none'
            placeholder='Search for something here...'
            spellCheck='false'
          />
        </div>
      </div>
      <div className='w-1/6 flex justify-end items-center gap-x-2 ml-auto'>
        <span className='font-semibold text-lg'>{user.userFName}</span>
        <div className='p-px rounded-lg ring-2 ring-primary'>
          <img src={user.avatarUrl} alt='' className='w-9 h-9 rounded-lg ' />
        </div>
      </div>
    </header>
  );
}
export default memo(Header);
