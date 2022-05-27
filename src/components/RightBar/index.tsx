import React from 'react';

type Props = {
  className?: string;
};

export default function RightBar({ className }: Props) {
  return (
    <aside id="rightBar" className={className + ''}>
      SideBar
    </aside>
  );
}
