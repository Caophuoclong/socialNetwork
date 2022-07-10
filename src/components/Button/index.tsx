import React from 'react';

type Props = {
  Icon?: React.ElementType;
  title: string;
  type: 'button' | 'submit' | 'reset';
  iconSize?: string;
};

export default function Button({ Icon, title, iconSize, ...props }: Props) {
  return (
    <button
      {...props}
      className='dark:bg-darkSecondary hover:dark:bg-opacity-70 p-3 rounded-xl w-[35%] flex items-center justify-center gap-x-4'
    >
      {Icon && <Icon size={iconSize || '0px'} />}
      <p className='truncate'>{title}</p>
    </button>
  );
}
