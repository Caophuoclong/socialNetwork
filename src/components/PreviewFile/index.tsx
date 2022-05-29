import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoResizeSharp } from 'react-icons/io5';
import { EnumMessageType } from '~/interfaces';

type Props = {
  className?: string;
  type: EnumMessageType;
  src?: string;
  children?: React.ReactNode;
};

export default function PreviewFile({ className, src, type }: Props) {
  const MediaType = () => {
    if (type === EnumMessageType.MP4) {
      return (
        <video
          className={`w-[90%] h-[90%] rounded-lg`}
          autoPlay={true}
          controls
          src={src}
        ></video>
      );
    }
    if (type === EnumMessageType.IMAGE || type === EnumMessageType.GIF)
      return <img src={src} alt='' className={`w-[90%] h-[90%]  rounded-lg`} />;
  };
  return (
    <div className='relative group flex justify-center items-center'>
      <div className={className}>{MediaType()}</div>
      <button className='absolute top-0 right-2 bg-white rounded-full border invisible  group-hover:visible duration-300 opacity-50'>
        <FaTimes size='20px' />
      </button>
      <button className='absolute top-1/2 left-1/2 -translate-x-[70%] -translate-y-1/2 bg-gray-200 rounded-full invisible group-hover:visible duration-300 opacity-50'>
        <IoResizeSharp size='20px' />
      </button>
    </div>
  );
}
