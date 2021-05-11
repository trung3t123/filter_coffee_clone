import * as Yup from 'yup';

export const passwordValidator = Yup.string()
  .required('Password can not be empty!')
  .min(8)
  .max(60)
  .matches(/[\w\d*.!@#$%^&(){}[\]:;<>,.?/~_+-=|]{1,}/, {
    message: 'Invalid password',
  });
