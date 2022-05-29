import React, { MouseEvent, useEffect, useRef } from 'react';
import { MdNavigateBefore } from 'react-icons/md';

type Props = {
  className?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function PrevArrow({ onClick, className }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (ref && ref.current) {
      ref!.current.classList.remove('slick-prev');
      ref!.current.classList.add('slick-prev1');
    }
  }, []);
  return (
    <button
      onClick={onClick}
      className={`text-white rounded-full flex items-center  ${className}`}
    >
      <MdNavigateBefore size='24px' />
    </button>
  );
}
