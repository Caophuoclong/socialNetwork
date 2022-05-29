import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoResizeSharp } from 'react-icons/io5';
import { EnumMessageType } from '~/interfaces';

type Props = {
  width?: number;
  height?: number;
  type: EnumMessageType;
  src?: string;
  children?: React.ReactNode;
};

export default function PreviewFile({
  width = 140,
  height = 80,
  src,
  type,
}: Props) {
  console.log(width);
  const MediaType = () => {
    if (type === EnumMessageType.MP4) {
      console.log(src);
      return (
        <video
          width={width}
          className={`h-[${height}px] cursor-grab rounded-lg`}
          autoPlay={true}
          controls
          src={src}
        ></video>
      );
    }
    if (type === EnumMessageType.IMAGE || type === EnumMessageType.GIF)
      return (
        <img
          src={src}
          alt=''
          width={`${width}`}
          className={`w-[${width}px] h-[${height}px] cursor-grab rounded-lg`}
        />
      );
  };
  return (
    <div className='relative group'>
      {MediaType()}
      <button className='absolute top-0 right-2 bg-white rounded-full border invisible  group-hover:visible duration-300 opacity-50'>
        <FaTimes size='20px' />
      </button>
      <button className='absolute top-1/2 left-1/2 -translate-x-[70%] -translate-y-1/2 bg-gray-200 rounded-full invisible group-hover:visible duration-300 opacity-50'>
        <IoResizeSharp size='20px' />
      </button>
    </div>
  );
}
