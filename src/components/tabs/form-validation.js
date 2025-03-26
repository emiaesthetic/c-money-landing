import { SELECTORS } from './constants';
import { validator } from './just-validate-config';
import { getActiveTabBtn } from './utils';

const validateFirstTab = async () => {
  const nameValid = await validator.revalidateField(SELECTORS.NAME);
  const surnameValid = await validator.revalidateField(SELECTORS.SURNAME);
  const patronymicValid = await validator.revalidateField(SELECTORS.PATRONYMIC);

  return nameValid && surnameValid && patronymicValid;
};

const validateSecondTab = async () => {
  const phoneValid = await validator.revalidateField(SELECTORS.PHONE);
  const emailValid = await validator.revalidateField(SELECTORS.EMAIL);

  return phoneValid && emailValid;
};

const validateThirdTab = async () => {
  const usernameValid = await validator.revalidateField(SELECTORS.USERNAME);
  const passwordValid = await validator.revalidateField(SELECTORS.PASSWORD);
  const password2Valid = await validator.revalidateField(SELECTORS.PASSWORD2);

  return usernameValid && passwordValid && password2Valid;
};

export const validateTab = async () => {
  switch (getActiveTabBtn()?.dataset.tabsPath) {
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
