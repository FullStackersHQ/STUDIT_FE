import { studyRoomHandlers } from './studyRoomHandlers';
import myPageHandlers from './myPageHandlers';
import pointHandlers from './pointHandlers';

export const handlers = [...studyRoomHandlers, ...myPageHandlers, ...pointHandlers];
