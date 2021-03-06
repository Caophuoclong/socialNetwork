import React from 'react';
import { useForm, FormProvider, useController } from 'react-hook-form';
import { ISignIn } from '~/interfaces';
import { useLocation, useNavigate } from 'react-router-dom';
import Input from '~/components/Input';
import * as yup from 'yup';
import { passwordSchema, usernameSchema } from '~/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Button from '~/components/Button';
import { FaUser } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';
import authServer from '../../services/authService';
import { toast, ToastContainer } from 'react-toastify';
import userService from '../../services/userService';
import { useAppDispatch } from '../../app/hooks';
import { getMe } from '~/reducers/userReducer';
import { unwrapResult } from '@reduxjs/toolkit';
const signInValidateSchema = yup.object().shape({
  username: usernameSchema,
  password: passwordSchema,
});
type Props = {};
type stateType = {
  from: {
    username: string;
  };
};
export default function SignIn({}: Props) {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const routeState = location.state as {
    username: string;
  };
  const defaultUsername = routeState ? routeState['username'] : '';
  const methods = useForm<ISignIn>({
    resolver: yupResolver(signInValidateSchema),
    mode: 'onChange',
    defaultValues: {
      username: defaultUsername || '',
    },
  });

  const onSubmit = (data: ISignIn) => {
    authServer
      .signin(data)
      .then((response) => {
        toast.success('Sign in successfully!', {
          onClose: async () => {
            try {
              const unwarp = await dispatch(getMe(response));
              unwrapResult(unwarp);
              navigate('/');
            } catch (error) {}
          },
        });
      })
      .catch((e) => {
        toast.error(e);
      });
  };
  return (
    <FormProvider {...methods}>
      <form
        className='flex flex-col h-1/3 w-full items-center gap-y-4 mt-auto'
        onSubmit={methods.handleSubmit(onSubmit)}
        action='#'
      >
        <Input name='username' required AfterIcon={FaUser} />
        <Input name='password' required AfterIcon={MdPassword} />
        <Button type='submit' title='Signin' />
        <Button
          type='submit'
          title='Signin with Google'
          Icon={FcGoogle}
          iconSize='28px'
        />
      </form>
      <p className='mt-auto mb-2 text-center'>
        Don't have an account yet?
        <Link to='/signup' className='text-blue-600'>
          {' '}
          SignUp
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
