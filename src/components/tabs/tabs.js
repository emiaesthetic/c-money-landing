import { CLASSES, DATA_ATTRIBUTES, SELECTORS } from './constants';
import { validateTab } from './form-validation';
import { renderSuccessCheckIn } from './success-check-in';

const switchBtn = path => {
  document
    .querySelectorAll(SELECTORS.TABS_BUTTON)
    .forEach(button => button.classList.remove(CLASSES.TABS_ACTIVE_BUTTON));

  const targetBtn = document.querySelector(
    `[${DATA_ATTRIBUTES.TAB_PATH}="${path}"]`,
  );
  targetBtn.classList.add(CLASSES.TABS_ACTIVE_BUTTON);
};

const switchContent = target => {
  document
    .querySelectorAll(SELECTORS.FORM_CONTENT)
    .forEach(content => content.classList.remove(CLASSES.FORM_ACTIVE_CONTENT));

  const targetContent = document.querySelector(
    `[${DATA_ATTRIBUTES.TAB_TARGET}="${target}"]`,
  );
  targetContent.classList.add(CLASSES.FORM_ACTIVE_CONTENT);
};

const isTabAfter = targetPath => {
  const activeBtn = document.querySelector(SELECTORS.TABS_ACTIVE_BUTTON);
  return +activeBtn.dataset.tabsPath < +targetPath;
};

const nextTab = () => {
  const activeBtn = document.querySelector(SELECTORS.TABS_ACTIVE_BUTTON);
  const activeContent = document.querySelector(SELECTORS.FORM_ACTIVE_CONTENT);

  const nextBtn = activeBtn.parentElement.nextElementSibling?.children[0];
  const nextContent = activeContent.nextElementSibling;

  if (nextBtn && nextContent) {
    activeBtn.classList.remove(CLASSES.TABS_ACTIVE_BUTTON);
    activeContent.classList.remove(CLASSES.FORM_ACTIVE_CONTENT);

    nextBtn.classList.add(CLASSES.TABS_ACTIVE_BUTTON);
    nextContent.classList.add(CLASSES.FORM_ACTIVE_CONTENT);
  }
};

export const initTabs = () => {
  const tabs = document.querySelector(SELECTORS.TABS_CONTAINER);
  const form = document.querySelector(SELECTORS.FORM_CONTAINER);

  if (tabs) {
    tabs.addEventListener('click', async ({ target }) => {
      if (target.classList.contains(CLASSES.TABS_BUTTON)) {
        const tabsPath = target.dataset.tabsPath;
        if (!tabsPath) return;

        if (isTabAfter(tabsPath) && !(await validateTab())) return;

        switchBtn(tabsPath);
        switchContent(tabsPath);
      }

      if (target.classList.contains(CLASSES.FORM_BUTTON)) {
        if (await validateTab()) {
          nextTab();
        }
      }
    });
  }

  if (form) {
    form.addEventListener('submit', async event => {
      event.preventDefault();

      if (await validateTab()) {
        const formData = new FormData(event.target);
        const userData = Object.fromEntries(formData);

        /* eslint-disable no-console */
        console.log(userData);

        renderSuccessCheckIn();
        form.reset();
      }
    });
  }
};
