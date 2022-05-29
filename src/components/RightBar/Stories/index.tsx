import React, { useRef } from 'react';
import { useAppSelector } from '../../../app/hooks';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Story from './Story';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';
import { sliderSettings } from '~/constants';

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
  const slideToShowAndScroll = 3;

  return (
    <div className='flex gap-x-4 w-full'>
      <Story
        imgUrl={user.imgUrl}
        name={user.name}
        className='relative after:absolute after:content-["+"] after:w-4 after:h-4 after:flex after:justify-center after:items-center after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:font-semibold  after:bg-[#E8E9EB]'
      />
      <div className='w-[60%] flex flex-1 justify-center'>
        <Slider ref={ref} {...sliderSettings(3, array.length)}>
          {array.map((story, index) => (
            <Story key={index} imgUrl={story.imgUrl} name={story.name} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
