import { studyRoomHandlers } from './studyRoomHandlers';
import myPageHandlers from './myPageHandlers';
import pointHandlers from './pointHandlers';
import studyMainHandlers from './studyMainHandlers';

export const handlers = [...studyRoomHandlers, ...myPageHandlers, ...pointHandlers, ...studyMainHandlers];
