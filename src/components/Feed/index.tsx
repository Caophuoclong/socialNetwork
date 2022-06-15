import { Avatar } from 'flowbite-react';
import React from 'react';
import { BiHeart, BiShare } from 'react-icons/bi';
import { FaRegComments } from 'react-icons/fa';
import { IoIosMore } from 'react-icons/io';
import { useAppSelector } from '~/app/hooks';
import Comment from '../Comment';
import { away } from '../MessageList/chatLogic';
import Content from './Content';
import ImageGrid from './ImageGrid';

type Props = {
  avatar: string;
  createAt: string;
  name: string;
  content?: string;
  images?: Array<string>;
};

export default function Feed({
  avatar,
  createAt,
  name,
  content,
  images,
}: Props) {
  const locale = useAppSelector((state) => state.globalSlice.locale);

  return (
    <div className='p-4 rounded-lg dark:bg-darkPrimary my-4 flex flex-col gap-y-4 bg-white'>
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
      <Content> {content} </Content>
      <ImageGrid images={images} />
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
      <div className='flex items-center justify-between px-4'>
        <div className='flex gap-x-1'>
          <BiHeart size='20px' />
          <span>Like</span>
        </div>
        <button
          onClick={() => {
            const textAr = document.getElementById('commentInput');
            if (textAr !== null) {
              textAr.focus();
            }
          }}
          className='flex gap-x-1'
        >
          <FaRegComments size='20px' />
          <span>Comment</span>
        </button>
        <div className='flex gap-x-1'>
          <BiShare size='20px' />
          <span>Share</span>
        </div>
      </div>
      <Comment />
    </div>
  );
}
