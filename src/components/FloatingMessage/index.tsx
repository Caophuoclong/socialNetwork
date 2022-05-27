import React from 'react';

type Props = {
  imgUrl: string;
  name: string;
  online: boolean;
  last: string;
  conversationId: string;
};

export default function FloatingMessage({
  imgUrl,
  name,
  online,
  last,
  conversationId,
}: Props) {
  return (
    <div className='absolute w-80px h-40 bg-gray-400'>
      <div className='flex gap-x-2'>
        <img src={imgUrl} alt='' className='h-10 w-10 rounded-full ' />
        <div>
          <span>{name}</span>
          {online ? (
            <div>
              <span className='w-2 h-2 rounded-full bg-green-400'></span>
              Online
            </div>
          ) : (
            <span className='text-sm font-light text-gray-400 italic'>
              {last}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
