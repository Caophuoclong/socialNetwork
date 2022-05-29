import React, { forwardRef } from 'react';
import { IconType } from 'react-icons';
import { IFileChoosen } from '~/interfaces';
type RefType = HTMLLabelElement;

const Input = forwardRef<RefType, IFileChoosen>(
  ({ label, Icon, accept }, ref) => {
    return (
      <label ref={ref} htmlFor={label} className='cursor-pointer'>
        <Icon size='24px' />
        <input type='file' id={label} name={label} hidden accept={accept} />
      </label>
    );
  }
);

export default Input;
