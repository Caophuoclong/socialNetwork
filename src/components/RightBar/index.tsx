import React from 'react';
import Conversations from './Conversations';
import Stories from './Stories';

type Props = {
  className?: string;
};

export default function RightBar({ className }: Props) {
  return (
    <aside id='rightBar' className={className + ' flex flex-col px-2 z-0'}>
      <Stories />
      <Conversations />
    </aside>
  );
}
