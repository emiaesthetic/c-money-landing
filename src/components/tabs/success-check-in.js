import { SELECTORS } from './constants';

export const renderSuccessCheckIn = () => {
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

  const checkIn = document.querySelector(SELECTORS.CHECK_IN);
  checkIn.replaceWith(successCheckIn);
};
