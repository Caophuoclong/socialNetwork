import { useEffect, useRef, useState } from 'react';

import { HiOutlineMinus } from 'react-icons/hi';
import { TiTimes } from 'react-icons/ti';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { EnumMessageType, IConversation, IMessage } from '../../interfaces';
import {
  addMinimizeConversation,
  removeChoosenConversation,
} from '../../reducers/globalReducer';
import { FaRegHeart } from 'react-icons/fa';
import InputCard from '../InputCard';
import { HiOutlinePaperAirplane } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import MessageList from '../MessageList';
import { addMessages } from '~/reducers/messageReducer';
import { away } from '../MessageList/chatLogic';
import { FiMaximize2 } from 'react-icons/fi';
import { FileChoosen, sliderSettings } from '~/constants';
import InputFile from '../InputFile';
import { Dropdown } from 'flowbite-react';
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
  const sliderRef = useRef<HTMLDivElement>(null);

  const wFileRef = '350px';
  const dispatch = useAppDispatch();

  // const [isMinimize, setIsMinimized] = useState(false);
  const [fileChoosens, setFileChoosens] = useState<File[]>([]);
  console.log(conversation);
  const other = conversation.participants.filter(
    (participant) => participant.userId !== user.userId
  )[0];
  console.log(friends);
  const friend =
    friends.filter((friend) => friend.userId === other.userId)[0] || {};
  console.log(friend);
  const handleRemoveChoosenConversation = () => {
    dispatch(removeChoosenConversation(conversation));
  };

  const [text, setText] = useState<string>('');
  const handleOnChange = (value: string) => {
    setText(value);
  };
  const handleEnterPress = () => {
    if (text.length > 0) {
      const message: IMessage = {
        messageId: '123',
        conversationId: conversation.conversationId,
        messageCreateAt: new Date().toISOString(),
        sourceId: user.userId,
        messageContent: text,
        messageType: EnumMessageType.TEXT,
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
  }, [text, refFileChoosen]);
  useEffect(() => {
    if (dropdownRef.current) {
      dropdownRef.current.children[0].classList.remove(
        'dropdown-toggle',
        'btn',
        'btn-primary'
      );
    }
  }, [dropdownRef]);
  {
    // useEffect(() => {
    //   if (
    //     messageCardRef.current &&
    //     messageListRef.current &&
    //     inputBoxRef.current &&
    //     headerRef.current
    //   ) {
    //     if (isMinimize) {
    //       messageListRef.current.classList.add('hidden');
    //       inputBoxRef.current.classList.add('hidden');
    //       messageCardRef.current.classList.add('dark:bg-transparent');
    //       messageCardRef.current.classList.add('bg-transparent');
    //       messageCardRef.current.classList.remove('bg-white');
    //       messageCardRef.current.classList.remove('shadow-2xl');
    //       headerRef.current.classList.add('mt-auto');
    //     } else {
    //       messageListRef.current.classList.remove('hidden');
    //       inputBoxRef.current.classList.remove('hidden');
    //       messageCardRef.current.classList.remove('dark:bg-transparent');
    //       messageCardRef.current.classList.add('bg-white');
    //       messageCardRef.current.classList.remove('bg-transparent');
    //       messageCardRef.current.classList.add('shadow-2xl');
    //       headerRef.current.classList.remove('mt-auto');
    //     }
    //   }
    // }, [isMinimize]);
  }

  const handleUploadFile = (files: FileList | null) => {
    let fileList: File[] = [
      ...(fileChoosens || []),
      ...Array.from(files || []),
    ];
    const x = fileList.filter((f, i, a) => {
      if (i === a.findIndex((t) => t.name === f.name && t.size === f.size)) {
        return true;
      }
    });

    setFileChoosens(x);
  };
  // useEffect(() => {
  //   const slider = sliderRef.current;
  //   if (slider) {
  //     if (fileChoosens.length < 2) {
  //       slider.classList.remove('justify-center');
  //       slider.classList.add('justify-start');
  //     } else {
  //       slider.classList.remove('justify-start');
  //       slider.classList.add('justify-center');
  //     }
  //   }
  // }, [fileChoosens]);
  const handleRemoveFile = (file: File) => {
    setFileChoosens(
      ([] as File[]).concat(
        ...fileChoosens.filter(
          (f) => f.name !== file.name && f.lastModified === f.lastModified
        )
      )
    );
  };
  return (
    <div
      ref={messageCardRef}
      className='w-[340px] h-[470px] shadow-2xl dark:bg-darkSecondary bg-white flex flex-col rounded-t-lg z-50'
    >
      <div
        ref={headerRef}
        className='flex w-full h-[50px] z-50 shadow-md dark:bg-darkSecondary bg-white rounded-t-lg'
      >
        <Dropdown
          color='alternative'
          size='sm'
          arrowIcon={false}
          inline={true}
          label={
            <div className='relative flex gap-x-4 hover:bg-secondary cursor-pointer rounded-tl-lg text-secondary hover:text-white items-center px-2'>
              <div className='relative'>
                <div className='w-10 h-10 rounded-full ring-2 ring-gray-300 flex items-center justify-center'>
                  <img
                    className='w-9 h-9 rounded-full'
                    src={friend.avatarUrl}
                    alt=''
                  />
                </div>
                {friend.isOnline ? (
                  <span className='absolute bottom-[2px] left-7 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full'></span>
                ) : (
                  <span className='absolute bottom-[2px] left-7 transform translate-y-1/4 w-3.5 h-3.5 bg-red-400 border-2 border-white dark:border-gray-800 rounded-full'></span>
                )}
              </div>

              <div className='space-y-px font-medium text-left'>
                <div className='text-left dark:text-white'>
                  {friend.userFName}
                </div>
                {friend.isOnline ? (
                  <div className='text-sm text-gray-500 dark:text-gray-300'>
                    Online
                  </div>
                ) : (
                  <div className='text-sm text-gray-500 dark:text-gray-400'>
                    {away((friend.lastOnline || '').toLocaleString(), locale)}
                  </div>
                )}
              </div>
            </div>
          }
          placement='left'
        >
          <Dropdown.Item>
            <Link to={`/messages/${conversation.conversationId}`}>
              Open in Messenger
            </Link>
          </Dropdown.Item>
        </Dropdown>
        <div className='ml-auto mr-2 flex items-center'>
          <button
            onClick={() => {
              dispatch(addMinimizeConversation(conversation));
            }}
            className='w-6 h-6 text-primary rounded-full hover:bg-gray-300 flex items-center justify-center'
          >
            {!false ? (
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
        <MessageList
          className=''
          messageList={messages[conversation.conversationId]}
        />
      </div>
      <div
        ref={inputBoxRef}
        className='px-2 border-t-2 dark:border-darkPrimary flex flex-col pt-1 mt-auto'
      >
        <div
          ref={sliderRef}
          className='flex items-center gap-x-2 max-h-[110px] mt-auto'
        >
          <Slider
            {...sliderSettings(2, fileChoosens.length, false)}
            className='w-full text-black h-full '
          >
            {(fileChoosens || []).map((file, index) => (
              <PreviewFile
                key={index}
                file={file}
                onRemoveFile={handleRemoveFile}
                className='w-[90%] h-[90px] '
              />
            ))}
          </Slider>
        </div>
        <div className='flex min-h-[40px] items-center gap-x-2 mt-auto mb-2'>
          <div
            ref={fileRef}
            className={`min-w-[${wFileRef}] text-primary flex gap-x-3`}
          >
            {FileChoosen.map((fileChoosen, index) => (
              <InputFile
                key={index}
                {...fileChoosen}
                onChange={handleUploadFile}
              />
            ))}
          </div>
          <InputCard
            onAddEmoji={handleAddEmoji}
            value={text}
            onChange={handleOnChange}
            onKeyPress={handleEnterPress}
          />
          <div className='w-[10%] text-primary'>
            {text.length > 0 || fileChoosens.length > 0 ? (
              <button className='rotate-[45deg]'>
                <HiOutlinePaperAirplane size='24px' />
              </button>
            ) : (
              <FaRegHeart size='24px' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
