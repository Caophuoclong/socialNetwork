import React from 'react';

type Props = {
  imgUrl: string;
  name: string;
  online: boolean;
  last?: string;
};

export default function Conversation({ imgUrl, name, online, last }: Props) {
  return (
    <div className='flex gap-x-2 items-center cursor-pointer hover:bg-gray-300 rounded-lg p-1'>
      <img src={imgUrl} alt='' className='w-10 h-10 rounded-full ' />
      <span className='text-[#52617b] font-semibold'>{name}</span>
      <div className='ml-auto mr-2'>
        {online ? (
          <div className='w-2 h-2 rounded-full bg-green-400'></div>
        ) : (
          <span className='text-sm font-light text-gray-400 italic'>
            {last}
          </span>
        )}
      </div>
    </div>
  );
}
