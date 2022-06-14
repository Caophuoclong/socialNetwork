import React from 'react';
import MinimizeConversations from '~/components/MinimizeConversations';
import PostingFeed from '~/components/PostingFeed';
import { useAppSelector } from '~/app/hooks';
import MessageCard from '~/components/MessageCard';
import { IConversation } from '~/interfaces';

type Props = {};

export default function HomePage({}: Props) {
  const choosenConversations = useAppSelector(
    (state) => state.globalSlice.choosendConversation
  );
  const minimizeConversation = useAppSelector(
    (state) => state.globalSlice.minimizeConversation
  );
  return (
    <div className='relative min-h-full  rounded-xl bg-transparent px-8 flex gap-x-8 py-4'>
      <div className='w-[60%]'>
        <PostingFeed />
        <div className='dark:bg-darkPrimary h-96'>homepage</div>
        <div className='dark:bg-darkPrimary h-96'>homepage</div>
        <div className='dark:bg-darkPrimary h-96'>homepage</div>
        <div className='dark:bg-darkPrimary h-96'>homepage</div>
        <div className='dark:bg-darkPrimary h-96'>homepage</div>
        <div className='dark:bg-darkPrimary h-96'>homepage</div>
        <div className='dark:bg-darkPrimary h-96'>homepage</div>
        <div className='dark:bg-darkPrimary h-96'>homepage</div>
        <div className='dark:bg-darkPrimary h-96'>homepage</div>
        <div className='dark:bg-darkPrimary h-96'>homepage</div>
      </div>
      <div className='sidebar rounded-lg bg-white w-[40%]'>hihi</div>

      <div className='fixed bottom-0 right-[100px] flex gap-x-4 z-50'>
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
