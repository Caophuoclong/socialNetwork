import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { DefaultLayout } from './components';
import { privateRoutes, publicRoutes } from './routes';
import { IRoute } from './interfaces';
import moment from 'moment';
import { useAppSelector, useAppDispatch } from './app/hooks';
import { unwrapResult } from '@reduxjs/toolkit';
import { getMe } from '~/reducers/userReducer';
import authService from './services/authService';
import 'moment/locale/vi';
import { EnumErrorCode } from '~/interfaces';
function App() {
  const locale = useAppSelector((state) => state.globalSlice.locale);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useEffect(() => {
    moment.locale(locale);
  }, [locale]);
  useEffect(() => {
    (async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) navigate('/signin');
      else {
        try {
          const unwrap = await dispatch(getMe());
          const result = unwrapResult(unwrap);
          console.log(result);
        } catch (error: any) {
          console.log(error);
          if (error.message === 'TokenExpired') {
            try {
              const response = await authService.refreshToken();
              localStorage.setItem('accessToken', response);
              await dispatch(getMe(response));
            } catch (error) {
              if (error === EnumErrorCode.TOKENEXPIRED) {
                localStorage.removeItem('accessToken');
                navigate('/signin');
              }
            }
          }
        }
      }
    })();
  }, []);
  return (
    <Routes>
      {publicRoutes.map((route: IRoute, index) => {
        const Layout = route.layout ? route.layout : DefaultLayout;
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
      {privateRoutes.map((route: IRoute, index) => {
        const Layout = route.layout ? route.layout : DefaultLayout;
        const Page = route.component;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
