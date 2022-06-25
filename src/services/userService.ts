import axiosClient from './axiosCLient';
import IUser from '../interfaces/IUser';
const url = '/user';
const accessToken = localStorage.getItem('accessToken');
const config = {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};
const userService = {
  getMe: () => {
    return new Promise<IUser>(async (resolve, reject) => {
      try {
        const response = await axiosClient.get(url + '/', config);
        console.log(response);
        if (response.data.code === 200) {
          resolve(response.data.data.user);
        }
      } catch (error) {
        reject(error);
      }
    });
  },
  getMe1: () => {
    return new Promise((resolve, recject) => {});
  },
};
export default userService;
