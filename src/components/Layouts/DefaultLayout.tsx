import React, { memo } from 'react';
import Header from '../Header';
import LeftBar from '../LeftBar';
import RightBar from '../RightBar';

type Props = {
  children: JSX.Element | string;
};

function DefaultLayout({ children }: Props) {
  return (
    <div className='bg-[#f0f2f5 dark:bg-darkPrimary dark:text-white min-h-screen'>
      <Header className='flex items-center gap-x-2 h-[50px] bg-[#f0f2f5] dark:bg-darkPrimary top-0 w-full z-50 sticky px-2' />
      <div className='flex gap-x-2 dark:bg-darkPrimary dark:text-white px-2 mt-4'>
        <LeftBar className='w-[250px] dark:bg-darkPrimary dark:text-white sidebar' />
        <main className='flex-1 rounded-t-xl bg-[#f9fafb] dark:bg-darkSecondary dark:text-white'>
          {children}
        </main>
        <RightBar className=' w-[300px] dark:bg-darkPrimary dark:text-white sidebar right-0' />
      </div>
    </div>
  );
}
export function LayoutWithoutRightBar({ children }: Props) {
  return (
    <div className='bg-[#f0f2f5 dark:bg-darkPrimary dark:text-white min-h-screen'>
      <Header className='flex items-center gap-x-2 h-[50px] bg-[#f0f2f5] dark:bg-darkPrimary mb-2 top-0 w-full z-50 sticky px-2' />
      <div className='flex gap-x-2 dark:bg-darkPrimary dark:text-white px-2 mt-4'>
        <LeftBar className='w-[250px] dark:bg-darkPrimary dark:text-white sidebar' />
        <main className='flex-1 p-4 rounded-t-xl bg-[#f9fafb] dark:bg-darkSecondary dark:text-white'>
          {children}
        </main>
      </div>
    </div>
  );
}
export default memo(DefaultLayout);
