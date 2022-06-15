import { Avatar } from 'flowbite-react';
import React, { useState } from 'react';
import { useAppSelector } from '~/app/hooks';
import { BsCameraVideo, BsCardImage } from 'react-icons/bs';
import TextInput from '../TextInput';

type Props = {};

export default function PostingFeed({}: Props) {
  const user = useAppSelector((state) => state.userSlice);
  const [postContent, setPostContent] = useState<string>('');

  return (
    <div className='bg-white rounded-lg p-4 flex flex-col gap-y-2 dark:bg-darkPrimary mb-4'>
      <div className='flex gap-x-4 '>
        <Avatar img={user.imgUrl} rounded />
        <TextInput
          className='bg-gray-200 rounded-lg'
          placeholder='What are you thinking?'
          value={postContent}
          onChange={(v) => setPostContent(v)}
        />
      </div>
      <div className='flex gap-x-4'>
        <div className='flex gap-x-2 items-center'>
          <BsCameraVideo />
          Live video!
        </div>
        <div className='flex gap-x-2 items-center'>
          <BsCardImage />
          Photo/Video
        </div>
        <button className='text-xl rounded-lg px-4 py-2 bg-primary ml-auto'>
          Post
        </button>
      </div>
    </div>
  );
}
