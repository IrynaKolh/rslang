/* eslint-disable no-console */
import { chooseLevel, choosePage } from './pages/eBook/controller/listenController';
import { renderEBookHeader, renderEBook } from './pages/eBook/view/renderBook';
// import renderGamePage from './pages/games/game-menu';
import renderMainPage from './pages/main-page/main-page';
import renderStatisticsPage from './pages/statistics/statistics';

const renderPageContent = async () => {
  const currentPage = window.location.pathname;
  switch (currentPage) {
    case '/':
    case '/main-page':
      renderMainPage();
      break;
    case '/ebook':
      renderEBookHeader();
      chooseLevel();
      choosePage();
      renderEBook();
      break;
    case '/games':
      // renderGamePage();
      break;
    case '/statistics':
      renderStatisticsPage();
      break;
    default:
      renderMainPage();
  }
};

export default renderPageContent;
