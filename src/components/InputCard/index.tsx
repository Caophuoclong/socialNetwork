import React, { useState } from 'react';
import Picker, { IEmojiData } from 'emoji-picker-react';
import { GrEmoji } from 'react-icons/gr';
type Props = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLElement>) => void;
  value: string;
  onAddEmoji: (emoji: string) => void;
};

export default function InputCard({
  value,
  onChange,
  onKeyPress,
  onAddEmoji,
}: Props) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const onEmojiClick = (event: React.MouseEvent, emojiObject: IEmojiData) => {
    onAddEmoji(emojiObject.emoji);
  };
  const handleShowEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  return (
    <div className='flex-1 bg-gray-200 rounded-full mt-auto flex pr-2'>
      <input
        type='text'
        onChange={onChange}
        onKeyDown={onKeyPress}
        value={value}
        className='outline-none pl-4  p-2 bg-transparent w-[90%]'
        placeholder='Tt'
      />
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
