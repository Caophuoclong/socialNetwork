import axiosClient from './axiosCLient';
import { EnumErrorCode, ISginUp, ISignINDTO } from '~/interfaces';
const authServer = {
  signin: (data: { username: string; password: string }) => {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const response = await axiosClient.post<ISignINDTO>(
          '/user/login',
          data
        );
        console.log(response);
        if (response.status === 200 || response.status === 201) {
          if (response.data) {
            localStorage.setItem('accessToken', response.data.token);
            resolve(response.data);
          } else resolve(responseData.message);
        } else {
          reject(responseData.message);
        }
      } catch (e: any) {
        console.log(e.response.data);
        if (e.response.data.code === 401) {
          reject(e.response.data.message);
        }
      }
    });
  },
  signUp: (data: Partial<ISginUp>) => {
    return new Promise<{
      username: string;
    }>(async (resolve, reject) => {
      try {
        const response = await axiosClient.post('/user/register', data);
        const responseData = response.data;
        console.log(response);
        if (response.status === 201 || response.status === 200) {
          resolve({
            username: data.username!,
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
  refreshToken: () => {
    return new Promise<string>(async (resolve, reject) => {
      try {
        const response = await axiosClient.get('/auth/token');
        if (response.data) {
          const token = response.data.data.token;
          resolve(token);
        }
      } catch (error: any) {
        console.log(error);
        if (error.response.data.addtional === 'AllTokenExpired') {
          return reject(EnumErrorCode.TOKENEXPIRED);
        }
        if (error.response.data.addtional === 'loginAgain') {
          return reject(EnumErrorCode.LOGINAGAIN);
        }
      }
    });
  },
};

export default authServer;
