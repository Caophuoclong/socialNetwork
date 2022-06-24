import * as yup from 'yup';
const usernameSchema = yup
  .string()
  .required('Username is required')
  .min(6, 'Username atl east 6 letter!');
const passwordSchema = yup
  .string()
  .required('Password is required')
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
    'Password minium 6 chars, at least one letter and one number!'
  );
const confirmPasswordSchema = yup
  .string()
  .oneOf([yup.ref('password'), null], 'Passwords must match');
const emailSchema = yup.string().email();
export { usernameSchema, passwordSchema, confirmPasswordSchema, emailSchema };
