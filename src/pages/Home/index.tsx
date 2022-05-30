import React from 'react';
import MinimizeConversations from '~/components/MinimizeConversations';
import { useAppSelector } from '../../app/hooks';
import MessageCard from '../../components/MessageCard';
import { IConversation } from '../../interfaces';

type Props = {};

export default function HomePage({}: Props) {
  const choosenConversations = useAppSelector(
    (state) => state.globalSlice.choosendConversation
  );
  const minimizeConversation = useAppSelector(
    (state) => state.globalSlice.minimizeConversation
  );
  return (
    <div className='relative min-h-full  rounded-xl p-2 bg-transparent'>
      <div className='dark:bg-darkPrimary'>homepage</div>
      <div className='fixed bottom-0 right-[100px] flex gap-x-4'>
        {([] as IConversation[])
          .concat(choosenConversations)
          .reverse()
          .map((conversation, index) => {
            return <MessageCard conversation={conversation} key={index} />;
          })}
      </div>
      {minimizeConversation.length > 0 && <MinimizeConversations />}
    </div>
  );
}
