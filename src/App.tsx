import React, { useEffect } from 'react';
import NotFound from './components/NotFound';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { DefaultLayout } from './components';
import { privateRoutes, publicRoutes } from './routes';
import { IRoute } from './interfaces';
import moment from 'moment';
import { useAppSelector } from './app/hooks';
import 'moment/locale/vi';
function App() {
  const locale = useAppSelector((state) => state.globalSlice.locale);
  const navigate = useNavigate();
  useEffect(() => {
    moment.locale(locale);
  }, [locale]);
  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) navigate('/signin');
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
