import React, { forwardRef } from 'react';
import { IconType } from 'react-icons';
import { IFileChoosen } from '~/interfaces';
type RefType = HTMLLabelElement;
interface IFileChoosen1 extends IFileChoosen {
  onChange: (fileList: FileList | null) => void;
}
const Input = forwardRef<RefType, IFileChoosen1>(
  ({ label, Icon, accept, onChange }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.files);
      inputRef!.current!.value = '';
    };
    return (
      <label ref={ref} htmlFor={label} className='cursor-pointer'>
        <Icon size='24px' />
        <input
          ref={inputRef}
          type='file'
          id={label}
          name={label}
          hidden
          accept={accept}
          onChange={handleChange}
          multiple
        />
      </label>
    );
  }
);

export default Input;
