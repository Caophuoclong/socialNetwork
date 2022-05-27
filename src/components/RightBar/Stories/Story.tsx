import React from 'react';

type Props = {
  imgUrl: string;
  name: string;
  className?: string;
};

export default function Story({ imgUrl, name, className }: Props) {
  return (
    <div className={className + ' flex flex-col justify-center items-center'}>
      <img
        src={imgUrl}
        alt=''
        className='my-2 w-12 h-12 rounded-full border-[#5f97ff] border-2'
      />
      <span>{name.split(' ')[name.split(' ').length - 1]}</span>
    </div>
  );
}
