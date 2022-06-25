import React, { useRef } from 'react';
import { useAppSelector } from '../../../app/hooks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Story from './Story';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import { sliderSettings } from '~/constants';
import NextArrow from '~/components/Arrow/NextArrow';
import PrevArrow from '~/components/Arrow/PrevArrow';

type Props = {};

export default function Stories({}: Props) {
  const user = useAppSelector((state) => state.userSlice);
  const array = [
    {
      imgUrl: 'https://picsum.photos/40',
      name: 'Man1',
    },
    {
      imgUrl: 'https://picsum.photos/40',
      name: 'Long2',
    },
    {
      imgUrl: 'https://picsum.photos/40',
      name: 'Thanh3',
    },
    {
      imgUrl: 'https://picsum.photos/40',
      name: 'Thanh4',
    },
    {
      imgUrl: 'https://picsum.photos/40',
      name: 'Thanh5',
    },
    {
      imgUrl: 'https://picsum.photos/40',
      name: 'Man6',
    },
    {
      imgUrl: 'https://picsum.photos/40',
      name: 'Long7',
    },
    {
      imgUrl: 'https://picsum.photos/40',
      name: 'Thanh8',
    },
    {
      imgUrl: 'https://picsum.photos/40',
      name: 'Thanh9',
    },
    {
      imgUrl: 'https://picsum.photos/40',
      name: 'Thanh10',
    },
    {
      imgUrl: 'https://picsum.photos/40',
      name: 'Thanh11',
    },
    {
      imgUrl: 'https://picsum.photos/40',
      name: 'Thanh12',
    },
    {
      imgUrl: 'https://picsum.photos/40',
      name: 'Thanh13',
    },
  ];
  const ref = useRef<Slider>(null);
  const handleOnClick = () => {};

  return (
    <div className='flex gap-x-4 w-full'>
      <Story
        imgUrl={user.avatarUrl}
        name={user.userFName || user.username}
        className='relative after:absolute after:content-["+"] after:w-4 after:h-4 after:flex after:justify-center after:items-center after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:font-semibold dark:bg-darkPrimary after:bg-[#E8E9EB] after:dark:text-white after:dark:bg-darkPrimary'
      />
      <div className='w-[60%] flex flex-1 justify-center'>
        <Slider
          ref={ref}
          {...sliderSettings(3, array.length, true)}
          nextArrow={<NextArrow onClick={handleOnClick} />}
          prevArrow={<PrevArrow onClick={handleOnClick} />}
        >
          {array.map((story, index) => (
            <Story key={index} imgUrl={story.imgUrl} name={story.name} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
