interface ISginUp {
  fullname: string;
  username: string;
  password: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: {
    day: number;
    month: string;
    year: number;
  };
}
interface ISignINDTO {
  token: string;
  firsName: string;
  lastName: string;
  username: string;
  id: string;
  email: string;
}
type ISignIn = Pick<ISginUp, 'username' | 'password'>;
export type { ISginUp, ISignIn, ISignINDTO };
