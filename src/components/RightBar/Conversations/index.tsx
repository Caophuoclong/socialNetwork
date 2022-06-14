import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import Conversation from './Conversation';
import { IoIosMore } from 'react-icons/io';

type Props = {};

export default function Conversations({}: Props) {
  const conversations = useAppSelector(
    (state) => state.conversationSlice.conversations
  );
  console.log(conversations);
  return (
    <div className='h-[80%] flex flex-col z-0'>
      <div className='font-semibold italic border-b flex'>
        <span>Friends</span>
        <button className='ml-auto mr-2'>
          <IoIosMore size='24px' />
        </button>
      </div>
      <div className='overflow-y-auto flex-1 z-0'>
        {conversations.map((conversation, index) => {
          return <Conversation conversation={conversation} key={index} />;
        })}
      </div>
    </div>
  );
}
