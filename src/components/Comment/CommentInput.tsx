import { Avatar } from 'flowbite-react';
import React, { useState } from 'react';
import { useAppSelector } from '~/app/hooks';
import TextInput from '../TextInput';

type Props = {};

export default function CommentInput({}: Props) {
  const user = useAppSelector((state) => state.userSlice);
  const [commentText, setCommentText] = useState<string>('');
  const handleSend = () => {
    setCommentText('');
    console.log(commentText);
  };
  return (
    <div className='flex gap-x-4'>
      <Avatar img={user.imgUrl} rounded />
      <div className='w-[90%] dark:bg-darkSecondary rounded-lg flex items-center'>
        <TextInput
          placeholder='Enter you comment'
          id='commentInput'
          className='bg-gray-200  w-[100%] p-2 rounded-lg'
          value={commentText}
          onSend={handleSend}
          onChange={(e) => setCommentText(e)}
        />
      </div>
    </div>
  );
}
