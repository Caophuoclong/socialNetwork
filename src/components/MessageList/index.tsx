import moment from 'moment';
import React, { useEffect, useRef } from 'react';
import { useAppSelector } from '../../app/hooks';
import { IMessage } from '../../interfaces';
import { dateToSomeThing } from './chatLogic';
import MyMessage from './MyMessage';
import OtherMessage from './OtherMessage';

type Props = {
  className: string;
  messageList: IMessage[];
};

export default function MessageList({ messageList, className }: Props) {
  const user = useAppSelector((state) => state.userSlice);
  const locale = useAppSelector((state) => state.globalSlice.locale);
  const messageListRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messageListRef.current &&
      messageListRef.current.scrollTo({
        top: messageListRef.current.scrollHeight,
        // behavior: 'smooth',
      });
  };
  const scrollToBottomWithSmooth = () => {
    messageListRef.current &&
      messageListRef.current.scrollTo({
        top: messageListRef.current.scrollHeight,
        // behavior: 'smooth',
      });
  };
  useEffect(() => {
    if (messageListRef!.current)
      if (
        !(
          messageListRef.current?.scrollHeight -
            messageListRef.current?.scrollTop >
          (1 / 3) * messageListRef.current?.scrollHeight
        )
      )
        return scrollToBottom();
    if (
      messageList &&
      messageList.length > 0 &&
      messageList[messageList.length - 1].senderId === user._id
    )
      return scrollToBottomWithSmooth();
  }, [messageList]);
  return (
    <>
      <div
        ref={messageListRef}
        className='flex flex-col gap-y-2 p-2 overflow-y-auto h-full text-xl'
      >
        {messageList ? (
          messageList.map((message, index) => (
            <div key={index}>
              {index !== 0 &&
                new Date(message.createAt).getTime() -
                  new Date(messageList[index - 1].createAt).getTime() >=
                  3000 * 1000 && (
                  <div className='border w-full relative my-8'>
                    <div className='absolute p-1 rounded-full bg-gray-400 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 truncate'>
                      {moment(message.createAt).format('hh:mm') +
                        ' ' +
                        dateToSomeThing(message.createAt, locale)}
                    </div>
                  </div>
                )}
              {message.senderId === user._id ? (
                <MyMessage message={message} key={index} />
              ) : (
                <OtherMessage message={message} key={index} />
              )}
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
