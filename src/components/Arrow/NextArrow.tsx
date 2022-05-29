import React, { MouseEvent, useEffect, useRef } from 'react';
import { MdOutlineNavigateNext } from 'react-icons/md';

type Props = {
  className?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export default function NextArrow({ onClick, className }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (ref && ref.current) {
      ref!.current.classList.remove('slick-next');
      ref!.current.classList.add('slick-next1');
    }
  }, []);
  return (
    <button
      onClick={onClick}
      className={`rounded-full flex items-center text-white ${className}`}
    >
      <MdOutlineNavigateNext size='24px' />
    </button>
  );
}
