import kakaoHandler from './kakaoHandlers';
import myPageHandlers from './myPageHandlers';
import pointHandlers from './pointHandlers';
import recruitHandlers from './recruitHandlers';
import studyMainHandlers from './studyMainHandlers';
import timerHandlers from './timerHandlers';
import todoHandlers from './todoHandlers';

export const handlers = [
  ...recruitHandlers,
  ...myPageHandlers,
  ...pointHandlers,
  ...studyMainHandlers,
  ...kakaoHandler,
  ...timerHandlers,
  ...todoHandlers,
];
