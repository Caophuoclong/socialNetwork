import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import Conversation from './Conversation';
import { IoIosMore } from 'react-icons/io';

type Props = {};

export default function Conversations({}: Props) {
  const conversations = useAppSelector(
    (state) => state.conversationSlice.conversations
  );
  const user = useAppSelector((state) => state.userSlice);
  return (
    <div>
      <div className='font-semibold italic border-b flex'>
        <span>Friends</span>
        <button className='ml-auto mr-2'>
          <IoIosMore size='24px' />
        </button>
      </div>
      <div className='py-2'>
        {conversations.map((conversation, index) => {
          const friend = conversation.participants.filter(
            (participant) => participant._id !== user._id
          )[0];
          return (
            <Conversation
              imgUrl={friend.imgUrl}
              name={friend.name}
              online={false}
              last={'3minuesday'}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
