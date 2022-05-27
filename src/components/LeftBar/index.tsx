import React, { useEffect } from 'react';
import { MdOutlineSpaceDashboard, MdOutlineLogout } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { BiMessageSquareDetail, BiNotification, BiUser } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
type Props = {
  className?: string;
};

export default function LeftBar({ className }: Props) {
  const navigaTitle: Array<{
    icon: any;
    title: string;
    link: string;
  }> = [
    {
      icon: MdOutlineSpaceDashboard,
      title: 'Feed',
      link: '/',
    },
    {
      icon: BiMessageSquareDetail,
      title: 'Messages',
      link: '/messages',
    },
    {
      icon: BiNotification,
      title: 'Notifications',
      link: '/notifications',
    },
    {
      icon: BiUser,
      title: 'Profile',
      link: '/profile',
    },
    {
      icon: IoSettingsOutline,
      title: 'Settings',
      link: '/settings',
    },
    {
      icon: MdOutlineLogout,
      title: 'Logout',
      link: '/123',
    },
  ];
  const location = useLocation();
  useEffect(() => {
    const pathName = location.pathname;
    const elements = document.querySelectorAll('a');
    if (elements) {
      elements.forEach((element) => {
        element.classList.remove('bg-[#4e5d78]', 'text-white');
        element.classList.add('text-[#4e5d78]');

        const url = new URL(element.href);
        if (url.pathname === pathName) {
          element.classList.add('bg-[#4e5d78]', 'text-white');
          element.classList.remove('text-[#4e5d78]');
        }
      });
    }
  }, [location]);
  return (
    <nav className={className + ' flex flex-col gap-y-6'}>
      {navigaTitle.map((item, index) => {
        const Icon = item.icon;
        return (
          <Link
            to={item.link}
            key={index}
            className='flex items-center gap-x-2 font-medium p-4 rounded-md hover:bg-[#4e5d78] hover:text-white text-[#4e5d78] cursor-pointer'
          >
            <Icon size='24px' />
            <span className=''>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
