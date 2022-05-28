import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { HiOutlineMinus } from 'react-icons/hi';
import { TiTimes } from 'react-icons/ti';
import { IoAddCircle, IoImage } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { IConversation, IMessage } from '../../interfaces';
import { removeChoosenConversation } from '../../reducers/globalReducer';
import { FaRegHeart } from 'react-icons/fa';
import InputCard from '../InputCard';
import { RiFileGifFill } from 'react-icons/ri';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import MessageList from '../MessageList';
import { addMessages } from '../../reducers/messageReducer';
import { away } from '../MessageList/chatLogic';
import { FiMaximize2 } from 'react-icons/fi';
import FileChoosen from '../FileChoosen';
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
  const imgRef = useRef<HTMLLabelElement>(null);
  const gifRef = useRef<HTMLLabelElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const wFileRef = 35;
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
        type: 'text',
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
        fileRef.current.classList.remove(`w-[${wFileRef}%]`);
        imgRef.current && imgRef.current.classList.add('hidden');
        gifRef.current && gifRef.current.classList.add('hidden');
      } else {
        fileRef.current.classList.remove('w-[10%]');
        fileRef.current.classList.add(`w-[${wFileRef}%]`);
        imgRef.current && imgRef.current.classList.remove('hidden');
        gifRef.current && gifRef.current.classList.remove('hidden');
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

  return (
    <div
      ref={messageCardRef}
      className='w-[340px] h-[450px] rounded-t-lg shadow-2xl bg-white z-50 flex flex-col rounded-lg'
    >
      <div
        ref={headerRef}
        className='flex w-full h-[50px] z-50 shadow-md bg-white'
      >
        <Dropdown drop={'start'}>
          <Dropdown.Toggle
            bsPrefix='flex gap-x-2 hover:bg-gray-200 cursor-pointer rounded-t-xl px-2'
            as='div'
          >
            <img
              src={friend.imgUrl}
              alt=''
              className='h-10 w-10 rounded-full'
            />
            <div>
              <span>{friend.name}</span>
              {friend.isOnline ? (
                <div className='flex items-center gap-x-1'>
                  <div className='w-2 h-2 rounded-full bg-green-400'></div>
                  Online
                </div>
              ) : (
                <span className='text-sm font-light text-gray-400 italic block'>
                  {away(friend.lastOnline.toLocaleString(), locale)}
                </span>
              )}
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu bsPrefix='dropdown-menu rounded-lg mr-2 shadow-2xl border'>
            <Dropdown.Item as='div' eventKey='1'>
              <Link to={`/messages/${conversation._id}`}>
                Open in Messenger
              </Link>
            </Dropdown.Item>
            <Dropdown.Item eventKey='2'>Another action</Dropdown.Item>
            <Dropdown.Item eventKey='3'>Something else here</Dropdown.Item>
          </Dropdown.Menu>
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
        <div className='flex h-[40px] items-center gap-x-2 mt-auto mb-2'>
          <div
            ref={fileRef}
            className={`w-[${wFileRef}%] text-primary flex gap-x-3`}
          >
            <FileChoosen ref={(imgRef = { fileRef })} />
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
