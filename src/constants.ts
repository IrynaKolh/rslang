import asset1 from './assets/7741846_3711949.jpg';
import asset2 from './assets/7140765_3556940.jpg';
import asset3 from './assets/22378293_6566143.jpg';
import irynaAvatar from './assets/Iryna.png';
import olgaAvatar from './assets/Olga.png';
import alexeiAvatar from './assets/Alexei.png';
import { UserWordOptions } from './Interfaces';

export const host = 'https://rslang-team-68.herokuapp.com';

export const path = {
  users: '/users',
  tokens: '/tokens',
  words: '/words',
  aggregatedWords: '/aggregatedWords',
  statistics: '/statistics',
  settings: '/settings',
  signin: '/signin',
};

export const filterAggregate = {
  isLearned: '{"$and":[{"userWord.difficulty":"easy", "userWord.optional.isLearned":true}]}',
  hard: '{"$and":[{"userWord.difficulty":"hard"}]}',
  isNewWord: '{"$and":[{"userWord.optional.isNewWord":true}]}',
};

export const WORDS_OF_PAGE = 20;
export const PAGES_NUMBER = 30;

export const wordBase : UserWordOptions = {
  difficulty: 'easy',
  optional: {
    attemp: 0,
    isNewWord: false,
    guesses: 0,
    error: 0,
    isLearned: false,
  },
};

const strings = {
  registration: 'Начать обучение',
  creatorsTitle: 'Наша команда',
  chapterEBook: 'Электронный учебник',
  savana: 'Саванна',
  audioCall: 'Аудио вызов',
  complicated: 'Сложное',
  deleted: 'Удалить',
  regForm: 'Регистрация',
  loginForm: 'Войти в аккаунт',
  regSubmit: 'Зарегистрироватьcя',
  loginSubmit: 'Войти',
  loginQuestion: 'Нет аккаунта?',
  regQuestion: 'Уже есть аккаунт?',
  learned: 'Изученное',
  learnedWords: 'Изученные слова',
  complicatedWords: 'Cложные',
  deletedWords: 'Удаленные слова',
  easy: 'Простое',
  width: '33.3%',
  needLogin: 'Доступно только зарегистрированным пользователям.',
  guesses: 'Правильных ответов:',
  error: 'Не правильных ответов:',
};

export const statsStrings = {
  numberLearnedWords: 'Количество изученных слов',
  percentageRightWords: '% правильных ответов',
  numberNewWords: 'Количество новых слов',
  seriesRightWords: 'Количество правильных ответов подряд',
  dayStats: 'Статистика за сегодня',
  allStats: 'Статистика за всё время',
};

export const gameIndicators = [
  {
    iconStyle: 'bi-patch-check',
    description: statsStrings.numberNewWords,
    id: 'new-words',
  },
  {
    iconStyle: 'bi-check2',
    description: statsStrings.numberLearnedWords,
    id: 'learned-words',
  },
  {
    iconStyle: 'bi-check2-all',
    description: statsStrings.seriesRightWords,
    id: 'right-words',
  },
];

export const dailyIndicators = [
  {
    description: statsStrings.numberNewWords,
    id: 'daily-new-words',
  },
  {
    description: statsStrings.numberLearnedWords,
    id: 'daily-learned-words',
  },
  {
    description: statsStrings.percentageRightWords,
    id: 'daily-right-words',
  },
];

interface MainDescription {
  img: string,
  message: string,
}

export const mainDescriptions: MainDescription[] = [
  {
    img: asset1,
    message: 'Пробуй разные уровни сложности в упражнениях и ставь новые цели',
  },
  {
    img: asset2,
    message: 'Следи за своим прогрессом в реальном времени на странице статистики',
  },
  {
    img: asset3,
    message: 'Тренируй чтение, аудирование, лексику в увлекательных играх',
  },
];

export interface CreatorDescription {
  img: string,
  name: string,
  role: string,
  githubLink: string,
  description: string,
}

export const creatorsDescriptions: CreatorDescription[] = [
  {
    img: irynaAvatar,
    name: 'Ирина',
    role: 'Frontend Developer',
    githubLink: 'https://github.com/irynakolh',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    img: olgaAvatar,
    name: 'Ольга',
    role: 'Frontend Developer',
    githubLink: 'https://github.com/olgad21',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
  {
    img: alexeiAvatar,
    name: 'Алексей',
    role: 'Frontend Developer',
    githubLink: 'https://github.com/marusovalexei',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
  },
];

export default strings;
