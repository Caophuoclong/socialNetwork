import React from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { useRef, useState, useEffect } from 'react';

type Props = {
  name: string;
  BeginIcon?: React.ElementType;
  AfterIcon?: React.ElementType;
  required?: boolean;
  iconSize?: string;
};

export default function Input({
  name,
  BeginIcon,
  AfterIcon,
  required,
  iconSize = '20px',
}: Props) {
  const { register, formState, getValues } = useFormContext();
  const labelRef = useRef<HTMLLabelElement>(null);
  const {
    field: { onChange },
  } = useController({
    name: name,
  });
  const values = getValues();
  const [text, setText] = useState(values[name] || '');
  useEffect(() => {
    const label = labelRef.current;
    if (label) {
      if (text.length > 0) {
        label.classList.add('top-0', '-translate-y-1/2');
      } else {
        label.classList.remove('top-0', '-translate-y-1/2');
      }
    }
  }, [text, values]);
  const errorMessage = formState.errors[name]?.message;
  return (
    <div
      className={`flex rounded-xl dark:bg-darkPrimary p-2 w-[40%] ring-2 relative ${
        errorMessage
          ? 'dark:ring-red-400 ring-red-300'
          : 'dark:ring-[#d6d1d1] ring-purple-600 '
      } items-center`}
    >
      {BeginIcon && <BeginIcon size={iconSize} />}
      {errorMessage && (
        <>
          <div className='mr-2 dark:text-red-400 text-red-300 xl:hidden group'>
            ?
            <p
              className={`absolute group-hover:visible invisible w-[150px]  ${
                errorMessage ? 'dark:text-red-400 text-red-300' : ''
              } line-clamp-3 top-0 -left-1/2 -translate-x-1/2 select-none dark:bg-darkSecondary px-2 rounded-lg`}
            >
              {errorMessage as string}
            </p>
          </div>
          <p
            className={`absolute invisible xl:visible xl:-right-1/2 max-w-[150px]  ${
              errorMessage ? 'dark:text-red-400 text-red-300' : ''
            } line-clamp-3`}
          >
            {errorMessage as string}
          </p>
        </>
      )}
      <input
        id={name}
        type={
          name.toLocaleLowerCase().includes('password') ? 'password' : 'text'
        }
        placeholder=' '
        className='bg-transparent  w-[80%] mx-auto py-1'
        {...register(name)}
        onChange={(e) => {
          onChange(e);
          setText(e.target.value);
        }}
      />
      <label
        ref={labelRef}
        className={`absolute visible ml-[10%] pointer-events-none select-none text-purple-600 dark:text-[#d6d1d1] dark:bg-darkPrimary bg-white group-focus-within:top-0 px-2  group-focus-within:-translate-y-1/2 duration-75 ease-in-out ${
          errorMessage
            ? 'dark:text-red-400 text-red-300'
            : 'text-purple-600 dark:text-[#d6d1d1]'
        }`}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}{' '}
      </label>
      {AfterIcon && <AfterIcon size={iconSize} />}

      {required && <p className='text-red-700 flex items-center'>*</p>}
    </div>
  );
}
