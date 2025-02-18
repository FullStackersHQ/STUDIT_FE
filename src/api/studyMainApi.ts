import { StudyDetail } from '../types/interface';
import client from '../utils/client';

const studyMainApi = {
  getStudyDetail: async (studyId: number) => {
    const { data: response } = await client.get(`/rooms/${studyId}`);
    return response;
  },
  updateStudyDetail: async (studyId: number, editInfo: StudyDetail) => {
    const { data: response } = await client.put(`/rooms/${studyId}`, {
      title: editInfo.title,
      description: editInfo.description,
      tags: editInfo.tags,
    });
    return response;
  },
  getTodoList: async (studyId: number) => {
    const { data: response } = await client.get(`/todos/${studyId}`);
    return response;
  },
  createTodo: async (studyId: number, todoName: string) => {
    const { data: response } = await client.post(`/todos/new/${studyId}`, {
      todoName: todoName,
    });
    return response;
  },
  editTodo: async (studyId: number, todoName: string, todoId: number) => {
    const { data: response } = await client.patch(`/todos/change/${studyId}`, {
      todoId: todoId,
      todoName: todoName,
    });
    return response;
  },
  toggleTodoStatus: async (studyId: number, todoId: number, isCompleted: boolean) => {
    const { data: response } = await client.patch(`/todos/${todoId}/complete/${studyId}`, {
      isCompleted: isCompleted,
    });
    return response;
  },
  createNotice: async (studyId: number, content: string) => {
    const { data: response } = await client.post(`/rooms/${studyId}/notices`, { content: content });
    return response;
  },
  getNotice: async (studyId: number) => {
    const { data: response } = await client.get(`/rooms/${studyId}/notices`);
    return response;
  },
  editNotice: async (studyId: number, content: string) => {
    const { data: response } = await client.put(`/rooms/${studyId}/notices`, { content: content });
    return response;
  },
  deleteNotice: async (studyId: number) => {
    const { data: response } = await client.delete(`/rooms/${studyId}/notices`);
    return response;
  },
  startTimer: async (studyId: number, userId: number, todoId: number) => {
    const { data: response } = await client.post(`/timer/start/${studyId}`, { userId: userId, todoId: todoId });
    return response;
  },
  stopTimer: async (studyId: number, userId: number, todoId: number) => {
    const { data: response } = await client.post(`/timer/stop/${studyId}`, { userId: userId, todoId: todoId });
    return response;
  },
  getTimers: async (studyId: number) => {
    const { data: response } = await client.get(`/timers/${studyId}`);
    return response;
  },
};
export default studyMainApi;
