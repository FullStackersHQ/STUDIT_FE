import { studyRoomHandlers } from './studyRoomHandlers';
import myPageHandlers from './myPageHandlers';
import pointHandlers from './pointHandlers';
import studyDefaultHandlers from './studyDefaultHandlers';

export const handlers = [...studyRoomHandlers, ...myPageHandlers, ...pointHandlers, ...studyDefaultHandlers];
