import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoResizeSharp } from 'react-icons/io5';
import { EnumMessageType } from '~/interfaces';
import converTypeToEnum from '~/utils/convertTypeToEnum';
import readFileAsUrl from '~/utils/readFile';

type Props = {
  className?: string;
  file: File;
  onRemoveFile: (file: File) => void;
  children?: React.ReactNode;
};

export default function PreviewFile({ className, file, onRemoveFile }: Props) {
  const type = converTypeToEnum(file.type);
  const MediaType = (src: string) => {
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
    if (type === EnumMessageType.IMAGE)
      return <img src={src} alt='' className={`w-[90%] h-[90%]  rounded-lg`} />;
  };
  const [url, setUrl] = useState('');
  useEffect(() => {
    (async () => {
      const x = (await readFileAsUrl(file)) as string;
      setUrl(x);
    })();
  }, [file]);
  return (
    <div className='relative group flex justify-center items-center'>
      <div
        className={`cursor-grab rounded-lg ring-2 dark:ring-darkPrimary ring-white items-center flex justify-center my-2 ${className}`}
      >
        {MediaType(url)}
      </div>
      <button
        className='absolute top-0 right-2 bg-white rounded-full border invisible  group-hover:visible duration-300 opacity-50'
        onClick={() => {
          onRemoveFile(file);
        }}
      >
        <FaTimes size='20px' />
      </button>
      <button className='absolute top-1/2 left-1/2 -translate-x-[70%] -translate-y-1/2 bg-gray-200 rounded-full invisible group-hover:visible duration-300 opacity-50'>
        <IoResizeSharp size='20px' />
      </button>
    </div>
  );
}
