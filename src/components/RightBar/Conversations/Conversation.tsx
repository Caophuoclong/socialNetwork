import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { IConversation } from '../../../interfaces';
import {
  addChoosenConversation,
  removeMinimizeConversation,
} from '../../../reducers/globalReducer';
import { away } from '../../MessageList/chatLogic';

type Props = {
  conversation: IConversation;
};

export default function Conversation({ conversation }: Props) {
  const choosendConversations = useAppSelector(
    (state) => state.globalSlice.choosendConversation
  );
  const minimzeConversations = useAppSelector(
    (state) => state.globalSlice.minimizeConversation
  );
  const user = useAppSelector((state) => state.userSlice);
  const friends = useAppSelector((state) => state.friendSlice.friends);
  const other = conversation.participants.filter(
    (participant) => participant._id !== user._id
  )[0];
  const friend = friends.filter((friend) => friend._id === other._id)[0];
  const dispatch = useAppDispatch();
  const handleAddChoosenConversation = () => {
    let isExist = false;
    let isMinimize = false;
    choosendConversations.map((conv) => {
      if (conv._id === conversation._id) {
        isExist = true;
      }
    });
    minimzeConversations.map((con) => {
      if (con._id === conversation._id) isMinimize = true;
    });
    isMinimize && dispatch(removeMinimizeConversation(conversation));
    !isExist && dispatch(addChoosenConversation(conversation));
  };
  const locale = useAppSelector((state) => state.globalSlice.locale);
  return (
    <div
      className='group flex gap-x-2 items-center cursor-pointer hover:bg-secondary rounded-lg p-1 hover:text-white dark:text-white text-secondary'
      onClick={handleAddChoosenConversation}
    >
      <img src={friend.imgUrl} alt='' className='w-10 h-10 rounded-full ' />
      <span className='text-[#52617b] font-semibold dark:text-white group-hover:text-white'>
        {friend.name}
      </span>
      <div className='ml-auto mr-2'>
        {friend.isOnline ? (
          <div className='w-2 h-2 rounded-full bg-green-400'></div>
        ) : (
          <span className='text-sm font-light text-gray-400 italic'>
            {away(friend.lastOnline.toLocaleString(), locale)}
          </span>
        )}
      </div>
    </div>
  );
}
