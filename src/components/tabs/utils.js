import { SELECTORS } from './constants';

export const getActiveTabBtn = () =>
  document.querySelector(SELECTORS.TABS_ACTIVE_BUTTON);

export const getActiveTabContent = () =>
  document.querySelector(SELECTORS.FORM_ACTIVE_CONTENT);
