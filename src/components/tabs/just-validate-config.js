import JustValidate from 'just-validate';

import { SELECTORS } from './constants';

export const validator = new JustValidate('.form', {
  errorFieldCssClass: 'is-invalid',
  errorLabelCssClass: 'just-validate-error-message',
});

const validateName = value => /^[a-zA-Zа-яА-Я]{2,}$/.test(value);

const arePasswordsMatching = value => {
  const password = document.querySelector(SELECTORS.PASSWORD).value;
  return password === value;
};

validator
  .addField(SELECTORS.NAME, [
    {
      rule: 'required',
      errorMessage: 'Введите имя',
    },
    {
      rule: 'custom',
      validator: validateName,
      errorMessage: 'Некорректное имя',
    },
  ])
  .addField(SELECTORS.SURNAME, [
    {
      rule: 'required',
      errorMessage: 'Введите фамилию',
    },
    {
      rule: 'custom',
      validator: validateName,
      errorMessage: 'Некорректная фамилия',
    },
  ])
  .addField(SELECTORS.PATRONYMIC, [
    {
      rule: 'required',
      errorMessage: 'Введите отчество',
    },
    {
      rule: 'custom',
      validator: validateName,
      errorMessage: 'Некорректное отчество',
    },
  ])
  .addField(SELECTORS.PHONE, [
    {
      rule: 'required',
      errorMessage: 'Введите номер телефона',
    },
    {
      rule: 'custom',
      validator: value => {
        return /(?:\+|\d)[\d\-()\s]{9,}\d/g.test(value);
      },
      errorMessage: 'Некорректный номер',
    },
  ])
  .addField(SELECTORS.EMAIL, [
    {
      rule: 'required',
      errorMessage: 'Введите e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Некорректный e-mail',
    },
  ])
  .addField(SELECTORS.USERNAME, [
    {
      rule: 'required',
      errorMessage: 'Введите логин',
    },
    {
      rule: 'custom',
      validator: value => /^[a-zA-Z0-9_]{5,15}$/.test(value),
      errorMessage: 'Некорректный логин',
    },
  ])
  .addField(SELECTORS.PASSWORD, [
    {
      rule: 'required',
      errorMessage: 'Введите пароль',
    },
    {
      rule: 'strongPassword',
      errorMessage: 'Некорректный пароль',
    },
  ])
  .addField(SELECTORS.PASSWORD2, [
    {
      rule: 'required',
      errorMessage: 'Введите пароль повторно',
    },
    {
      rule: 'custom',
      validator: arePasswordsMatching,
      errorMessage: 'Пароли не совпадают',
    },
  ]);
