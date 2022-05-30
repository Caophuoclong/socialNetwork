import { Avatar, Tooltip } from 'flowbite-react';
import React from 'react';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { IConversation } from '~/interfaces';
import { FaTimes } from 'react-icons/fa';
import {
  addChoosenConversation,
  removeMinimizeConversation,
} from '~/reducers/globalReducer';

type Props = {
  conversation: IConversation;
};

export default function Conversation({ conversation }: Props) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userSlice);
  const other = conversation.participants.filter(
    (participant) => participant._id !== user._id
  );
  const friends = useAppSelector((state) => state.friendSlice.friends);
  const friend = friends.filter((friend) => friend._id === other[0]._id)[0];
  const handleClose = () => {
    dispatch(removeMinimizeConversation(conversation));
  };
  const maximize = () => {
    dispatch(addChoosenConversation(conversation));
    dispatch(removeMinimizeConversation(conversation));
  };
  return (
    <div className='relative group cursor-pointer'>
      <Tooltip
        animation='duration-100'
        style='auto'
        placement='left'
        content={
          <div className='px-2'>
            <div className='dark:text-white dark:bg-darkPrimary font-semibold'>
              {friend.name}
            </div>
            <div>hi</div>
          </div>
        }
      >
        <img
          src={friend.imgUrl}
          alt=''
          className='w-10 h-10 rounded-full '
          onClick={maximize}
        />
        {friend.isOnline ? (
          <div className='absolute bottom-px right-0 h-3 w-3 rounded-full bg-green-400'></div>
        ) : (
          <div className='absolute bottom-px right-0 h-3 w-3 rounded-full bg-red-600'></div>
        )}
      </Tooltip>
      <button
        onClick={handleClose}
        className='absolute top-0 right-0 bg-white border dark:bg-darkPrimary text-primary rounded-full -translate-y-1/3 translate-x-1/3 invisible group-hover:visible'
      >
        <FaTimes size='16px' />
      </button>
    </div>
  );
}
