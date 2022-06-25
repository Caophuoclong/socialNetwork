import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { IMessage } from '../../interfaces';
import { isSameSender } from './chatLogic';
import moment from 'moment';
type Props = {
  message: IMessage;
};

export default function OtherMessage({ message }: Props) {
  const user = useAppSelector((state) => state.userSlice);
  const friends = useAppSelector((state) => state.friendSlice.friends);
  const friend =
    friends.filter((friend) => friend.userId === message.sourceId)[0] || {};
  return (
    <div className='flex justify-start gap-x-2 w-[100%]'>
      <img
        src={friend.avatarUrl}
        alt='my avatar'
        className='w-10 h-10 rounded-full'
      />
      <div className='p-2 rounded-lg bg-[#3e4042] text-white max-w-[70%] bg-opacity-60'>
        <span>{message.messageContent}</span>
        <div className='text-xs text-gray-200'>
          {moment(message.messageCreateAt).format('hh:mm')}
        </div>
      </div>
    </div>
  );
}
