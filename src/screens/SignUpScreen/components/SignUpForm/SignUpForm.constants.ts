import YupPassword from 'yup-password';
import * as yup from 'yup';

YupPassword(yup);

export const SCHEMA = yup.object({
  region: yup.string().required().default(''),
  email: yup.string().email().required().default(''),
  password: yup
    .string()
    .password()
    .min(8)
    .minLowercase()
    .minUppercase()
    .minNumbers()
    .minSymbols()
    .required()
    .default(''),
  repeatPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .default(''),
  partnerCode: yup.string().optional(),
});

export const ERR_MSG = {
  required: 'Required field',
  email: 'Symbol disallowed',
  oneOf: 'Passwords must match',
};