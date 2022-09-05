import {
  chooseLevel,
  choosePage,
  linkToGame,
} from './pages/eBook/controller/listenController';
import { renderEBookHeader, renderEBook } from './pages/eBook/view/renderBook';
import renderMainPage from './pages/main-page/main-page';
import renderStatisticsPage from './pages/statistics/statistics';
import renderGameMenu from './pages/games/index';

const renderPageContent = async () => {
  let mainBtn: Element | null;
  const currentPage = `/${window.location.pathname.split('/').pop()}`;
  switch (currentPage) {
    case '/':
    case '/main-page':
      renderMainPage();
      mainBtn = document.querySelector('.main__button');
      mainBtn?.addEventListener('click', () => {
        window.history.pushState({ id: 'ebook' }, 'ebook', 'ebook');
        renderPageContent();
      });
      break;
    case '/ebook':
      renderEBookHeader();
      chooseLevel();
      choosePage();
      linkToGame();
      renderEBook();
      break;
    case '/games':
      renderGameMenu();
      break;
    case '/statistics':
      renderStatisticsPage();
      break;
    default:
      renderMainPage();
  }
};

export default renderPageContent;
