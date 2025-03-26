import JustValidate from 'just-validate';

const validator = new JustValidate('.form', {
  errorFieldCssClass: 'is-invalid',
  errorLabelCssClass: 'just-validate-error-message',
});

const validateName = value => /^[a-zA-Zа-яА-Я]{2,}$/.test(value);

const arePasswordsMatching = value => {
  const password = document.querySelector('#password').value;
  return password === value;
};

validator
  .addField('#name', [
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
  .addField('#surname', [
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
  .addField('#patronymic', [
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
  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Введите номер телефона',
    },
    {
      rule: 'custom',
      validator: value => {
        return /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/.test(value);
      },
      errorMessage: 'Некорректный номер',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Введите e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Некорректный e-mail',
    },
  ])
  .addField('#username', [
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
  .addField('#password', [
    {
      rule: 'required',
      errorMessage: 'Введите пароль',
    },
    {
      rule: 'strongPassword',
      errorMessage: 'Некорректный пароль',
    },
  ])
  .addField('#password2', [
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

const validateFirstTab = async () => {
  const nameValid = await validator.revalidateField('#name');
  const surnameValid = await validator.revalidateField('#surname');
  const patronymicValid = await validator.revalidateField('#patronymic');

  return nameValid && surnameValid && patronymicValid;
};

const validateSecondTab = async () => {
  const phoneValid = await validator.revalidateField('#phone');
  const emailValid = await validator.revalidateField('#email');

  return phoneValid && emailValid;
};

const validateThirdTab = async () => {
  const usernameValid = await validator.revalidateField('#username');
  const passwordValid = await validator.revalidateField('#password');
  const password2Valid = await validator.revalidateField('#password2');

  return usernameValid && passwordValid && password2Valid;
};

export const validateTab = async () => {
  switch (document.querySelector('.tabs__button--is-active').dataset.tabsPath) {
    case '1':
      return await validateFirstTab();
    case '2':
      return await validateSecondTab();
    case '3':
      return await validateThirdTab();
    default:
      return false;
  }
};
