import React, { memo } from 'react';
import Header from '../Header';
import LeftBar from '../LeftBar';
import RightBar from '../RightBar';

type Props = {
  children: JSX.Element | string;
};

function DefaultLayout({ children }: Props) {
  return (
    <div className='flex flex-col h-full px-2'>
      <Header />
      <div className='flex gap-x-2 bg-[#f0f2f5] h-[95%] mt-auto'>
        <LeftBar className='w-[250px] h-full' />
        <main className='flex-1 bg-[#f9fafb] rounded-lg'>{children}</main>
        <RightBar className='w-[300px]' />
      </div>
    </div>
  );
}
export function LayoutWithoutRightBar({ children }: Props) {
  return (
    <div className='flex flex-col h-full px-2'>
      <Header />
      <div className='flex gap-x-2 bg-[#f0f2f5] h-[95%] mt-auto'>
        <LeftBar className='w-[250px] h-full' />
        <main className='flex-1 bg-[#f9fafb] rounded-lg'>{children}</main>
      </div>
    </div>
  );
}
export default memo(DefaultLayout);
