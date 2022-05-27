import React, { memo } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useAppSelector } from '../../app/hooks';
import { LogoPage } from '../../assets/svgs';

type Props = {};

function Header({}: Props) {
  const user = useAppSelector((state) => state.userSlice);
  return (
    <header className="flex items-center gap-x-2">
      <div className="w-[250px] flex items-center gap-2">
        <LogoPage width={40} height={40} fill={'#42fd'} />
        <span className="font-extrabold text-xl text-[#42fd] italic">Coreee</span>
      </div>
      <div className="w-4/6 flex">
        <div className="w-1/2 rounded-lg px-4 py-2 border flex gap-x-2 items-center">
          <FiSearch size="16" />
          <input
            type="text"
            className="w-full outline-none font-medium"
            placeholder="Search for something here..."
          />
        </div>
      </div>
      <div className="w-1/6 flex justify-end items-center gap-x-2">
        <span className="font-semibold text-lg">{user.name}</span>
        <img src={user.imgUrl} alt="" className="w-10 h-10 rounded-lg" />
      </div>
    </header>
  );
}
export default memo(Header);
