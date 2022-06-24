import IRoute from '../interfaces/IRoute';
import {
  HomePage,
  SignIn,
  Messages,
  Notifications,
  Profile,
  Settings,
  SignUp,
} from '../pages';
import { LayoutWithoutRightBar } from '../components/Layouts/DefaultLayout';
import SignLayout from '~/components/Layouts/SignLayout';

export const publicRoutes: Array<IRoute> = [
  {
    path: '/signin',
    component: SignIn,
    layout: SignLayout,
  },
  {
    path: '/signup',
    component: SignUp,
    layout: SignLayout,
  },
];
export const privateRoutes: Array<IRoute> = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/notifications',
    component: Notifications,
    layout: LayoutWithoutRightBar,
  },
  {
    path: '/messages',
    component: Messages,
    layout: LayoutWithoutRightBar,
  },
  {
    path: '/messages/:id',
    component: Messages,
    layout: LayoutWithoutRightBar,
  },
  {
    path: '/profile',
    component: Profile,
    layout: LayoutWithoutRightBar,
  },
  {
    path: '/settings',
    component: Settings,
    layout: LayoutWithoutRightBar,
  },
];
