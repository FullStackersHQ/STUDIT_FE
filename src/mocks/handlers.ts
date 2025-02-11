import { studyRoomHandlers } from './studyRoomHandlers';
import myPageHandlers from './myPageHandlers';
import pointHandlers from './pointHandlers';
import studyHandlers from './studyHandlers';

export const handlers = [...studyRoomHandlers, ...myPageHandlers, ...pointHandlers, ...studyHandlers];
