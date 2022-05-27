import React from 'react';
import Conversations from './Conversations';
import Stories from './Stories';

type Props = {
  className?: string;
};

export default function RightBar({ className }: Props) {
  return (
    <aside id='rightBar' className={className + ' flex flex-col gap-y-4 p-2'}>
      <Stories />
      <Conversations />
    </aside>
  );
}
