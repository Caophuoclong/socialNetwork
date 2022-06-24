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
type ISignIn = Pick<ISginUp, 'username' | 'password'>;
export type { ISginUp, ISignIn };
