import React, { useEffect } from 'react';
import { MdOutlineSpaceDashboard, MdOutlineLogout } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { BiMessageSquareDetail, BiNotification, BiUser } from 'react-icons/bi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  ];
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathName = location.pathname;
    const elements = document.querySelectorAll('a');
    if (elements) {
      elements.forEach((element) => {
        element.classList.remove('bg-[#4e5d78]', 'text-white');
        element.classList.add('text-[#4e5d78]');
        const url = new URL(element.href);
        if (
          url.pathname === pathName ||
          (url.pathname.includes('messages') && pathName.includes('messages'))
        ) {
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
            className='flex items-center gap-x-2 font-medium p-2 rounded-md hover:bg-[#4e5d78] hover:text-white text-[#4e5d78] cursor-pointer dark:text-white'
          >
            <Icon size='24px' />
            <span className=''>{item.title}</span>
          </Link>
        );
      })}
      <button
        onClick={() => {
          localStorage.removeItem('accessToken');
          window.location.reload();
        }}
        className='flex items-center gap-x-2 font-medium p-2 rounded-md hover:bg-[#4e5d78] hover:text-white text-[#4e5d78] cursor-pointer dark:text-white'
      >
        <MdOutlineLogout size='24px' />
        Logout
      </button>
    </nav>
  );
}
