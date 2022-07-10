import React from 'react';
import { useForm, FormProvider, useController } from 'react-hook-form';
import { ISginUp, ISignIn } from '~/interfaces';
import Input from '~/components/Input';
import * as yup from 'yup';
import {
  confirmPasswordSchema,
  emailSchema,
  passwordSchema,
  usernameSchema,
} from '~/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Button from '~/components/Button';
import { MdOutlineAlternateEmail, MdPassword } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import authServer from '../../services/authService';
const signUpResolver = yup.object().shape({
  username: usernameSchema,
  password: passwordSchema,
  confirmPassword: confirmPasswordSchema,
  email: emailSchema,
});
type Props = {};

export default function SignIn({}: Props) {
  const navigate = useNavigate();
  const methods = useForm<ISginUp>({
    resolver: yupResolver(signUpResolver),
    mode: 'onChange',
  });

  const onSubmit = (data: ISginUp) => {
    const dataRequest = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    authServer
      .signUp(dataRequest)
      .then((response) => {
        console.log(response);
        toast.success('Signup successfully!', {
          onClose: () => {
            navigate('/signin', {
              state: {
                username: response.username,
              },
            });
          },
        });
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <FormProvider {...methods}>
      <form
        className='flex flex-col h-1/3 w-full items-center gap-y-4 mt-auto'
        onSubmit={methods.handleSubmit(onSubmit)}
        action='#'
      >
        <Input name='username' required AfterIcon={FaUserAlt} />
        <Input name='email' required AfterIcon={MdOutlineAlternateEmail} />
        <Input name='password' required AfterIcon={MdPassword} />
        <Input name='confirmPassword' required AfterIcon={MdPassword} />
        <Button type='submit' title='Signup' />
        <Button
          type='submit'
          title='Signup with Google'
          Icon={FcGoogle}
          iconSize='28px'
        />
      </form>
      <p className='mt-auto mb-2 text-center'>
        Do you have an account?
        <Link to='/signin' className='text-blue-600'>
          {' '}
          Signin
        </Link>
      </p>
      <ToastContainer
        position='top-right'
        limit={1}
        closeButton={false}
        autoClose={1000}
      />
    </FormProvider>
  );
}
