import { validateTab } from './formValidation';

const switchBtn = path => {
  document
    .querySelectorAll('.tabs__button')
    .forEach(button => button.classList.remove('tabs__button--is-active'));

  const targetBtn = document.querySelector(`[data-tabs-path="${path}"]`);
  if (targetBtn) targetBtn.classList.add('tabs__button--is-active');
};

const switchContent = target => {
  document
    .querySelectorAll('.form__content')
    .forEach(content => content.classList.remove('form__content--is-active'));

  const targetContent = document.querySelector(
    `[data-tabs-target="${target}"]`,
  );
  if (targetContent) targetContent.classList.add('form__content--is-active');
};

const isTabAfter = targetPath => {
  const activeBtn = document.querySelector('.tabs__button--is-active');
  return +activeBtn.dataset.tabsPath > +targetPath;
};

const nextTab = async () => {
  const activeBtn = document.querySelector('.tabs__button--is-active');
  const activeContent = document.querySelector('.form__content--is-active');

  const nextBtn = activeBtn.parentElement.nextElementSibling?.children[0];
  const nextContent = activeContent.nextElementSibling;

  if (nextBtn && nextContent) {
    activeBtn.classList.remove('tabs__button--is-active');
    activeContent.classList.remove('form__content--is-active');

    nextBtn.classList.add('tabs__button--is-active');
    nextContent.classList.add('form__content--is-active');
  }
};

const createSuccessCheckIn = () => {
  const successCheckIn = document.createElement('section');
  successCheckIn.classList.add('success-check-in');
  successCheckIn.innerHTML = `
    <div class="container">
      <h2 class="success-check-in__title title">
        Как зарегистрироваться на&nbsp;платформе
      </h2>

      <div class="success-check-in__content">
        <div class="success-check-in__wrapper">
          <svg width="50" height="50" aria-hidden="true">
            <use xlink:href="#success-check-in" />
          </svg>

          <h3 class="success-check-in__content-title">
            Вы&nbsp;успешно зарегистрировались на&nbsp;платформе C&#8209;Money!
          </h3>

          <p class="success-check-in__content-hint">
            Ссылка для входа в&nbsp;личный кабинет отправлена на&nbsp;вашу
            электронную почту (не&nbsp;забудьте проверить папку
            &laquo;Спам&raquo;)
          </p>
        </div>
      </div>
    </div>
  `;

  return successCheckIn;
};

export const initTabs = () => {
  const checkInSection = document.querySelector('.check-in');
  const tabs = checkInSection.querySelector('.tabs');
  const form = checkInSection.querySelector('.form');

  if (tabs) {
    tabs.addEventListener('click', async ({ target }) => {
      if (target.classList.contains('tabs__button')) {
        const tabsPath = target.dataset.tabsPath;
        if (!tabsPath) return;

        if ((await validateTab()) || isTabAfter(tabsPath)) {
          switchBtn(tabsPath);
          switchContent(tabsPath);
        }
      }

      if (target.classList.contains('form__button')) {
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
        console.log(userData);

        checkInSection.replaceWith(createSuccessCheckIn());
        form.reset();
      }
    });
  }
};
