import React from 'react';

type Props = {
  children: JSX.Element;
};

export default function SignLayout({ children }: Props) {
  return (
    <div className='flex h-screen dark:bg-darkPrimary dark:text-white'>
      <div className='w-1/2 border-r border-white'></div>
      <div className='w-1/2 flex flex-col items-center'>
        <div className='h-1/3'></div>
        {children}
      </div>
    </div>
  );
}
