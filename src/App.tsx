import React from 'react';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './components';
import { privateRoutes, publicRoutes } from './routes';
import { IRoute } from './interfaces';
function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
