import React, { memo } from 'react';
import Header from '../Header';
import LeftBar from '../LeftBar';
import RightBar from '../RightBar';

type Props = {
  children: JSX.Element | string;
};

function DefaultLayout({ children }: Props) {
  return (
    <div className='flex flex-col h-full bg-[#f0f2f5] px-2 dark:bg-darkPrimary dark:text-white'>
      <Header />
      <div className='flex gap-x-2  h-[95%] mt-auto dark:bg-darkPrimary dark:text-white'>
        <LeftBar className='w-[250px] h-full dark:bg-darkPrimary dark:text-white' />
        <main className='flex-1 p-4 rounded-t-xl bg-[#f9fafb] dark:bg-darkSecondary dark:text-white'>
          {children}
        </main>
        <RightBar className=' w-[300px] dark:bg-darkPrimary dark:text-white' />
      </div>
    </div>
  );
}
export function LayoutWithoutRightBar({ children }: Props) {
  return (
    <div className='flex flex-col h-full bg-[#f0f2f5] px-2 dark:bg-darkPrimary dark:text-white'>
      <Header />
      <div className='flex gap-x-2  h-[95%] mt-auto dark:bg-darkPrimary dark:text-white'>
        <LeftBar className='w-[250px] h-full dark:bg-darkPrimary dark:text-white' />
        <main className='flex-1 p-4 bg-[#f9fafb] rounded-t-xl dark:bg-darkSecondary dark:text-white'>
          {children}
        </main>
      </div>
    </div>
  );
}
export default memo(DefaultLayout);
