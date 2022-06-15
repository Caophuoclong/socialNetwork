import { Avatar } from 'flowbite-react';
import React, { ChangeEvent, FocusEvent, FocusEventHandler } from 'react';
import { useAppSelector } from '~/app/hooks';
import { BsCameraVideo, BsCardImage } from 'react-icons/bs';

type Props = {};

export default function PostingFeed({}: Props) {
  const user = useAppSelector((state) => state.userSlice);
  const onContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const ta = event.target;
    let taLineHeight = 20; // This should match the line-height in the CSS
    let taHeight = ta.scrollHeight; // Get the scroll height of the textarea
    let numberOfLines = Math.floor(taHeight / taLineHeight);
    console.log(numberOfLines);
    if (numberOfLines - 1 > 1) {
      ta.rows = 3;
    }
    if (ta.value.length < 50) {
      ta.rows = 1;
    }
  };
  return (
    <div className='bg-white rounded-lg p-4 flex flex-col gap-y-2 dark:bg-darkPrimary mb-4'>
      <div className='flex gap-x-4 '>
        <Avatar img={user.imgUrl} rounded />
        <textarea
          onChange={onContentChange}
          className='p-2 rounded-lg bg-gray-300 w-[90%]  resize-none outline-none dark:bg-darkSecondary'
          rows={1}
          placeholder='What are you thinking?'
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
