import { AxiosResponse } from 'axios';
import axiosClient from './axiosCLient';
import { ISginUp } from '~/interfaces';
const authServer = {
  signin: (data: { username: string; password: string }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axiosClient.post<{
          code: number;
          message: string;
          data?: {
            [key: string]: string;
          };
        }>('/auth/signin', data);
        const responseData = response.data;
        if (responseData.code === 200) {
          if (responseData.data) {
            localStorage.setItem('accessToken', responseData.data.accessToken);
            resolve('');
          } else resolve(responseData.message);
        } else {
          reject(responseData.message);
        }
      } catch (e) {
        reject('Error: ');
      }
    });
  },
  signUp: (data: Partial<ISginUp>) => {
    return new Promise<{
      username: string;
    }>(async (resolve, reject) => {
      try {
        const response = await axiosClient.post('/auth/signup', data);
        const responseData = response.data;
        if (responseData.code === 200) {
          resolve({
            username: responseData.data.username,
          });
        } else {
          reject(responseData.message);
        }
      } catch (error: any) {
        console.log(error);
        if (error.response.data.addtional === 'Duplicated') {
          reject('Username is already!');
        }
      }
    });
  },
};

export default authServer;
