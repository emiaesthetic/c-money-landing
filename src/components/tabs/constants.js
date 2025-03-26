const generateSelector = className => `.${className}`;

export const CLASSES = {
  TABS_CONTAINER: 'tabs',
  TABS_BUTTON: 'tabs__button',
  TABS_ACTIVE_BUTTON: 'tabs__button--is-active',
  FORM_CONTAINER: 'form',
  FORM_CONTENT: 'form__content',
  FORM_ACTIVE_CONTENT: 'form__content--is-active',
  FORM_BUTTON: 'form__button',
};

export const SELECTORS = {
  CHECK_IN: '.check-in',
  TABS_CONTAINER: generateSelector(CLASSES.TABS_CONTAINER),
  TABS_BUTTON: generateSelector(CLASSES.TABS_BUTTON),
  TABS_ACTIVE_BUTTON: generateSelector(CLASSES.TABS_ACTIVE_BUTTON),
  FORM_CONTAINER: generateSelector(CLASSES.FORM_CONTAINER),
  FORM_CONTENT: generateSelector(CLASSES.FORM_CONTENT),
  FORM_ACTIVE_CONTENT: generateSelector(CLASSES.FORM_ACTIVE_CONTENT),
  FORM_BUTTON: generateSelector(CLASSES.FORM_BUTTON),
  NAME: '#name',
  SURNAME: '#surname',
  PATRONYMIC: '#patronymic',
  PHONE: '#phone',
  EMAIL: '#email',
  USERNAME: '#username',
  PASSWORD: '#password',
  PASSWORD2: '#password2',
};

export const DATA_ATTRIBUTES = {
  TAB_PATH: 'data-tabs-path',
  TAB_TARGET: 'data-tabs-target',
};
