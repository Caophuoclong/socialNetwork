import { Avatar } from 'flowbite-react';
import React from 'react';
import { BiHeart } from 'react-icons/bi';
import { IoIosMore } from 'react-icons/io';
import { useAppSelector } from '~/app/hooks';
import { away } from '../MessageList/chatLogic';
import Content from './Content';
import ImageGrid from './ImageGrid';

type Props = {
  avatar: string;
  createAt: string;
  name: string;
  content: string;
};

export default function Feed({ avatar, createAt, name, content }: Props) {
  console.log(createAt);
  const locale = useAppSelector((state) => state.globalSlice.locale);

  return (
    <div className='p-4 rounded-lg dark:bg-darkPrimary my-4 flex flex-col gap-y-4'>
      <div className='flex gap-x-4 items-center'>
        <Avatar img={avatar} rounded />
        <div>
          <h4 className='text-lg font-bold'>{name}</h4>
          <small>{away(createAt, locale)}</small>
        </div>
        <button className='ml-auto rounded-full hover:bg-gray-400 w-5 h-5'>
          <IoIosMore size='20px' />
        </button>
      </div>
      <Content> Chao m </Content>
      <ImageGrid
        images={[
          'https://picsum.photos/440',
          'https://picsum.photos/440',
          'https://picsum.photos/440',
          'https://picsum.photos/440',
          'https://picsum.photos/440',
        ]}
      />
      <div className='flex '>
        <div className='flex gap-x-1'>
          <BiHeart size='20px' />
          <span>30</span>
        </div>
        <div className='ml-auto mr-4 flex gap-x-4 text-gray-300'>
          <div>3 comments</div>
          <div>3 shares</div>
        </div>
      </div>
    </div>
  );
}
