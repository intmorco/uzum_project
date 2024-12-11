export function Footer() {
  const footer_cont = document.querySelector('.footer_cont')

  footer_cont.innerHTML = `
      <div class="footer_details">
        <h4>О нас</h4>
        <span>Пункты выдачи</span>
        <span>Вакансии</span>
      </div>
      <div class="footer_details">
        <h4>Пользователям</h4>
        <span>Связаться с нами</span>
        <span>Вопрос-ответ</span>
      </div>
      <div class="footer_details">
        <h4>Для предпринимателей</h4>
        <span>Продавайте на Uzum</span>
        <span>Вход для продавцов</span>
        <span>Открыть пункт выдачи</span>
      </div>
      <div class="footer_details">
        <h4>Скачать приложение</h4>
        <div class="apps">
          <a target="_blank" href="https://play.google.com/store/apps/details?id=uz.uzum.app">
            <img class="google_play" src="/icons/google_play.svg" alt=""> <span>Google play</span>
          </a>
          <a target="_blank"
            href="https://apps.apple.com/ru/app/uzum-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1640483056">
            <img class="apple" src="/icons/apple.svg" alt=""> <span>AppStore</span>
          </a>
        </div>
        <h4>Uzum в соцсетях</h4>
        <div class="social_media">
          <a target="_blank" href="https://www.instagram.com/uzum.market"><img class="instagram" src="/icons/instagram.svg" alt=""></a>
          <a target="_blank" href="https://t.me/uzum_market"><img class="telegram" src="/icons/tg.svg" alt=""></a>
          <a target="_blank" href="https://www.facebook.com/uzummarket"><img class="facebook" src="/icons/facebook.svg" alt=""></a>
          <a target="_blank" href="https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA"><img class="youtube"
              src="/icons/youtube.svg" alt=""></a>
        </div>
    </div>

  `

  return footer_cont
}