import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { IMessage } from '../../interfaces';
import { isSameSender } from './chatLogic';
import moment from 'moment';
type Props = {
  message: IMessage;
};

export default function MyMessage({ message }: Props) {
  const user = useAppSelector((state) => state.userSlice);
  return (
    <div className='flex ml-auto justify-end mr-0 gap-x-2 w-[100%]'>
      <div className='p-2 rounded-lg bg-primary text-white max-w-[70%]'>
        <span className='break-words'>{message.text}</span>
        <div className='text-xs text-gray-200 text-right'>
          {moment(message.createAt).format('hh:mm')}
        </div>
      </div>
      <img
        src={user.imgUrl}
        alt='my avatar'
        className='w-10 h-10 rounded-full'
      />
    </div>
  );
}
