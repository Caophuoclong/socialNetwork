import React, { ChangeEvent, useRef } from 'react';
import reportWebVitals from '../../reportWebVitals';

type Props = {
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSend?: () => void;
  id?: string;
};

export default function TextInput({
  placeholder,
  className,
  onChange,
  value,
  onSend,
  id,
}: Props) {
  const refInput = useRef<HTMLTextAreaElement>(null);
  const handleSendPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && event.altKey) {
      console.log(123);
      if (onChange) onChange(value + '\n');
      return;
    }
    if (event.key === 'Enter') {
      if (refInput) {
        refInput.current!.rows = 1;
      }
      if (onSend) onSend();
      event.preventDefault();
      return;
    }
  };
  const updateRow = (numberOfLines: number = 0) => {
    const ta = refInput.current!;
    if (value && value.includes('\n')) {
      ta.rows = 3;
    } else {
      if (numberOfLines - 1 > 1) {
        ta.rows = 3;
      }
      if (ta && ta.value.length < 50 && !ta.value.includes('\n')) {
        ta.rows = 1;
      }
    }
  };
  updateRow();
  const onContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const ta = event.target;
    let taLineHeight = 20; // This should match the line-height in the CSS
    let taHeight = ta.scrollHeight; // Get the scroll height of the textarea
    let numberOfLines = Math.floor(taHeight / taLineHeight);
    updateRow(numberOfLines);
    if (onChange) onChange(ta.value);
  };

  return (
    <textarea
      onChange={onContentChange}
      onKeyDown={handleSendPress}
      id={id}
      ref={refInput}
      className={`p-2  w-[90%]  resize-none outline-none dark:bg-darkSecondary ${
        className ? className : ''
      }`}
      rows={1}
      placeholder={placeholder}
      value={value ? value : ''}
    />
  );
}
