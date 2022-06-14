import { Avatar } from 'flowbite-react';
import React from 'react';
import { useAppSelector } from '~/app/hooks';
import Conversation from './Conversation';

type Props = {};

export default function MinimizeConversations({}: Props) {
  const minimizeConversations = useAppSelector(
    (state) => state.globalSlice.minimizeConversation
  );
  const friends = useAppSelector((state) => state.friendSlice.friends);
  return (
    <div className='fixed right-10 bottom-8 flex flex-col gap-y-4 z-50'>
      {minimizeConversations.map((conversation, index) => (
        <Conversation conversation={conversation} key={index} />
      ))}
    </div>
  );
}
