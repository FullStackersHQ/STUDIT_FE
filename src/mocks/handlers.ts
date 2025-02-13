import myPageHandlers from './myPageHandlers';
import pointHandlers from './pointHandlers';
import recruitHandlers from './recruitHandlers';
import studyHandlers from './studyHandlers';

export const handlers = [...recruitHandlers, ...myPageHandlers, ...pointHandlers, ...studyHandlers];
