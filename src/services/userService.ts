import axiosClient from './axiosCLient';
import IUser from '../interfaces/IUser';
import { EnumErrorCode } from '~/interfaces';
const url = '/user';
const accessToken = localStorage.getItem('accessToken');
const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};
const userService = {
  getMe: (token?: string) => {
    return new Promise<IUser>(async (resolve, reject) => {
      try {
        if (token) {
          config.headers.Authorization = token;
        }
        const response = await axiosClient.get(url + '/', config);
        console.log(response);
        if (response.data.code === 200) {
          resolve(response.data.data.user);
        }
      } catch (error: any) {
        const response = error.response;
        console.log(response);
        if (response.data.message === 'TokenExpired') {
          console.log(EnumErrorCode.TOKENEXPIRED);
          reject('TokenExpired');
        }
      }
    });
  },
  getMe1: () => {
    return new Promise((resolve, recject) => {});
  },
};
export default userService;
