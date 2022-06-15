import React, { useState } from 'react';
import Picker, { IEmojiData } from 'emoji-picker-react';
import { GrEmoji } from 'react-icons/gr';
import TextInput from '../TextInput';
type Props = {
  onChange?: (e: string) => void;
  onKeyPress?: () => void;
  value: string;
  onAddEmoji: (emoji: string) => void;
};

export default function InputCard({
  value,
  onChange,
  onKeyPress,
  onAddEmoji,
}: Props) {
  const inputCard = React.useRef<HTMLDivElement>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const onEmojiClick = (event: React.MouseEvent, emojiObject: IEmojiData) => {
    onAddEmoji(emojiObject.emoji);
  };
  const handleShowEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  if (inputCard.current) {
    const inp = inputCard.current;
    const height = inp.clientHeight;
    if (height >= 80) {
      inp.classList.add('rounded-lg');
      inp.classList.remove('rounded-full');
    } else {
      inp.classList.add('rounded-full');
      inp.classList.remove('rounded-lg');
    }
  }
  return (
    <div
      ref={inputCard}
      className='flex-1 mt-auto flex p-1 dark:bg-darkPrimary bg-gray-300 '
    >
      <TextInput
        placeholder='Tt'
        className='outline-none px-2 bg-transparent w-[90%] dark:bg-darkPrimary p-0'
        onChange={onChange}
        onSend={onKeyPress}
        value={value}
      />
      {/* <input
        type='text'
        onChange={onChange}
        onKeyDown={onKeyPress}
        value={value}
        className='outline-none pl-4  p-2 bg-transparent w-[90%]'
        placeholder='Tt'
      /> */}
      <button className='text-primary' onClick={handleShowEmojiPicker}>
        <GrEmoji size='24px' />
      </button>
      {showEmojiPicker && (
        <Picker
          onEmojiClick={onEmojiClick}
          groupNames={{ smileys_people: 'PEOPLE' }}
          native
          pickerStyle={{
            position: 'absolute',
            right: '5px',
            height: '70%',
            transform: 'translate(0,-100%)',
          }}
        />
      )}
    </div>
  );
}
