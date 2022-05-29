import React, { useEffect, useRef, useState } from 'react';

import { HiOutlineMinus } from 'react-icons/hi';
import { TiTimes } from 'react-icons/ti';
import { IoAddCircle, IoImage } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { EnumMessageType, IConversation, IMessage } from '../../interfaces';
import { removeChoosenConversation } from '../../reducers/globalReducer';
import { FaRegHeart } from 'react-icons/fa';
import InputCard from '../InputCard';
import { RiFileGifFill } from 'react-icons/ri';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import MessageList from '../MessageList';
import { addMessages } from '~/reducers/messageReducer';
import { away } from '../MessageList/chatLogic';
import { FiMaximize2 } from 'react-icons/fi';
import { FileChoosen, sliderSettings } from '~/constants';
import Input from '../Input';
import { Avatar, Dropdown } from 'flowbite-react';
import PreviewFile from '../PreviewFile';
import Slider from 'react-slick';
type Props = {
  conversation: IConversation;
};

export default function MessageCard({ conversation }: Props) {
  const user = useAppSelector((state) => state.userSlice);
  const friends = useAppSelector((state) => state.friendSlice.friends);
  const messages = useAppSelector((state) => state.messageSlice.messages);
  const locale = useAppSelector((state) => state.globalSlice.locale);

  const messageCardRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const messageListRef = useRef<HTMLDivElement>(null);
  const inputBoxRef = useRef<HTMLDivElement>(null);
  const allFileRef = useRef<HTMLLabelElement>(null);
  const imgRef = useRef<HTMLLabelElement>(null);
  const gifRef = useRef<HTMLLabelElement>(null);
  const refFileChoosen = [allFileRef, imgRef, gifRef];
  FileChoosen.forEach((file, index) => (file.ref = refFileChoosen[index]));
  const headerRef = useRef<HTMLDivElement>(null);

  const wFileRef = '350px';
  const dispatch = useAppDispatch();

  const [isMinimize, setIsMinimized] = useState(false);
  const [fileChoosen, setFileChoosen] = useState<Blob>();
  const other = conversation.participants.filter(
    (participant) => participant._id !== user._id
  )[0];
  const friend = friends.filter((friend) => friend._id === other._id)[0];

  const handleRemoveChoosenConversation = () => {
    dispatch(removeChoosenConversation(conversation));
  };
  const toggleMinimize = () => {
    setIsMinimized(!isMinimize);
  };
  const [text, setText] = useState('');
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleEnterPress = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.keyCode === 13 && text.length > 0) {
      const message: IMessage = {
        _id: '123',
        conversationId: conversation._id,
        createAt: new Date().toISOString(),
        senderId: user._id,
        text: text,
        type: EnumMessageType.TEXT,
      };
      setText('');
      dispatch(addMessages(message));
    }
  };
  const handleAddEmoji = (emoji: string) => {
    setText(text + emoji);
  };

  useEffect(() => {
    if (fileRef.current)
      if (text.length > 0) {
        fileRef.current.classList.add('w-[10%]');
        fileRef.current.classList.remove(`min-w-[${wFileRef}]`);
        for (let i = 1; i < refFileChoosen.length; i++) {
          if (refFileChoosen[i].current && refFileChoosen[i]) {
            refFileChoosen[i]!.current!.classList.add('hidden');
          }
        }
      } else {
        fileRef.current.classList.remove('w-[10%]');
        fileRef.current.classList.add(`min-w-[${wFileRef}]`);
        for (let i = 1; i < refFileChoosen.length; i++) {
          if (refFileChoosen[i].current && refFileChoosen[i]) {
            refFileChoosen[i]!.current!.classList.remove('hidden');
          }
        }
      }
  }, [text]);
  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.children[0].classList.remove(
        'dropdown-toggle',
        'btn',
        'btn-primary'
      );
    }
  }, [dropdownRef]);

  useEffect(() => {
    if (
      messageCardRef.current &&
      messageListRef.current &&
      inputBoxRef.current &&
      headerRef.current
    ) {
      if (isMinimize) {
        messageListRef.current.classList.add('hidden');
        inputBoxRef.current.classList.add('hidden');
        messageCardRef.current.classList.add('bg-transparent');
        messageCardRef.current.classList.add('shadow-none');
        headerRef.current.classList.add('mt-auto');
      } else {
        messageListRef.current.classList.remove('hidden');
        inputBoxRef.current.classList.remove('hidden');
        messageCardRef.current.classList.remove('bg-transparent');
        messageCardRef.current.classList.remove('shadow-none');
        headerRef.current.classList.remove('mt-auto');
      }
    }
  }, [isMinimize]);
  const array = [
    {
      src: 'https://images.unsplash.com/photo-1591152582028-58e8c61e205c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      type: EnumMessageType.IMAGE,
    },
    {
      src: 'https://ghiencongnghe.info/wp-content/uploads/2021/02/1581591620013_WhoppingBlackLemur-size_restricted.gif',
      type: EnumMessageType.GIF,
    },
    {
      src: 'https://media4.giphy.com/media/BM1PsCGwKwximEunRg/giphy.mp4',
      type: EnumMessageType.MP4,
    },
  ];
  return (
    <div
      ref={messageCardRef}
      className='w-[340px] h-[450px] shadow-2xl bg-white z-50 flex flex-col rounded-t-lg'
    >
      <div
        ref={headerRef}
        className='flex w-full h-[50px] z-50 shadow-md bg-white rounded-t-lg'
      >
        <Dropdown
          color='alternative'
          size='sm'
          arrowIcon={false}
          inline={true}
          label={
            <div className='relative flex gap-x-2 hover:bg-gray-200 cursor-pointer rounded-tl-lg py-1 px-2'>
              <img
                className='w-10 h-10 rounded-full ring-2 ring-gray-300'
                src={friend.imgUrl}
                alt=''
              />
              {friend.isOnline ? (
                <span className='absolute bottom-3 left-9 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full'></span>
              ) : (
                <span className='absolute bottom-3 left-9 transform translate-y-1/4 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full'></span>
              )}
              <div className='space-y-1 font-medium dark:text-white'>
                <div className='text-left'>{friend.name}</div>
                {friend.isOnline ? (
                  <div className='text-sm text-gray-500 dark:text-gray-400'>
                    Online
                  </div>
                ) : (
                  <div className='text-sm text-gray-500 dark:text-gray-400'>
                    {away(friend.lastOnline.toLocaleString(), locale)}
                  </div>
                )}
              </div>
            </div>
          }
          placement='left'
        >
          <Dropdown.Item>
            <Link to={`/messages/${conversation._id}`}>Open in Messenger</Link>
          </Dropdown.Item>
        </Dropdown>
        <div className='ml-auto mr-2 flex items-center'>
          <button
            onClick={toggleMinimize}
            className='w-6 h-6 text-primary rounded-full hover:bg-gray-300 flex items-center justify-center'
          >
            {!isMinimize ? (
              <HiOutlineMinus size='24px' />
            ) : (
              <FiMaximize2 size='16px' />
            )}
          </button>
          <button
            className='w-6 h-6 text-primary rounded-full hover:bg-gray-300'
            onClick={handleRemoveChoosenConversation}
          >
            <TiTimes size='24px' />
          </button>
        </div>
      </div>
      <div ref={messageListRef} className='max-h-[360px] min-h-[240px] h-full'>
        <MessageList className='' messageList={messages[conversation._id]} />
      </div>
      <div ref={inputBoxRef} className='px-2 border-t flex flex-col'>
        <div className='p-2 flex items-center gap-x-2'>
          <Slider {...sliderSettings(2, array.length, false)}>
            {array.map((file, index) => (
              <PreviewFile key={index} type={file.type} src={file.src} />
            ))}
          </Slider>
        </div>
        <div className='flex h-[40px] items-center gap-x-2 mt-auto mb-2'>
          <div
            ref={fileRef}
            className={`min-w-[${wFileRef}] text-primary flex gap-x-3`}
          >
            {FileChoosen.map((fileChoosen, index) => (
              <Input key={index} {...fileChoosen} />
            ))}
          </div>
          <InputCard
            onAddEmoji={handleAddEmoji}
            value={text}
            onChange={handleOnChange}
            onKeyPress={handleEnterPress}
          />
          <div className='w-[10%] text-primary'>
            {text.length === 0 ? (
              <FaRegHeart size='24px' />
            ) : (
              <button className='rotate-[45deg]'>
                <HiOutlinePaperAirplane size='24px' />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
