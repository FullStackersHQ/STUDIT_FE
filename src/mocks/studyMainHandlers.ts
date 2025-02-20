import { http, HttpResponse } from 'msw';
import { todoListData, dummyStudyList, dummyNotices, timersData } from './data/studyDetailMockData';
import {
  CreateTodoRequest,
  UpdateStudyRequest,
  EditTodoRequest,
  ToggleTodoRequest,
  NoticeRequest,
  TimerRequest,
} from '../types/request';
import { TodoType } from '../types/interface';
import { mockStudyRoomList } from './data/studyListMockData';

const studyMainHandlers = [
  // 스터디룸 목록 조회
  http.get(`/api/rooms`, ({ request }) => {
    console.log('스터디 목록 조회');
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 5;
    const startIndex = (page - 1) * pageSize;
    const paginatedData = mockStudyRoomList.slice(startIndex, startIndex + pageSize);
    const hasNextPage = mockStudyRoomList.length > startIndex + pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage,
    });
  }),
  http.get(`/rooms/:studyId`, ({ params }) => {
    const studyId = params.studyId;
    const targetStudy = dummyStudyList.find((dummyStudy) => dummyStudy.roomId === Number(studyId));
    if (dummyStudyList && targetStudy) return HttpResponse.json(targetStudy);
    return HttpResponse.error();
  }),
  http.put(`/rooms/:studyId`, async ({ params, request }) => {
    try {
      const studyId = params.studyId;
      const body = (await request.json()) as UpdateStudyRequest;
      const targetStudy = dummyStudyList.find((dummyStudy) => dummyStudy.roomId === Number(studyId));
      if (!body || !targetStudy) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }
      const { title, tags, description } = body;
      targetStudy.description = description;
      targetStudy.tags = tags;
      targetStudy.title = title;
      return new HttpResponse(
        JSON.stringify({
          message: '스터디가 수정되었습니다.',
        }),
        { status: 200 },
      );
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),
  http.get('/todos/:studyId', ({ params }) => {
    const studyId = Number(params.studyId);
    const todoList = todoListData[studyId];

    todoList.todos.forEach((todo) => {
      if (todo.isRunning) {
        todoList.studyTotalTime += 1;
        todo.studyTime += 1;
      }
    });
    if (todoList) return HttpResponse.json(todoList);
    return HttpResponse.error();
  }),
  http.post('/todos/new/:studyId', async ({ params, request }) => {
    try {
      const studyId = Number(params.studyId);
      const todoList = todoListData[studyId];
      const body = (await request.json()) as CreateTodoRequest;

      if (!body) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }
      const { todoName } = body;
      const newTodo: TodoType = {
        todoId: todoList.todos.length,
        todoName: todoName as string,
        isCompleted: false,
        studyTime: 0,
        isRunning: false,
      };

      todoList.todos.push(newTodo);

      return new HttpResponse(
        JSON.stringify({
          message: '투두가 추가되었습니다.',
        }),
        { status: 200 },
      );
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),
  http.patch('/todos/change/studyId', async ({ params, request }) => {
    try {
      const studyId = Number(params.studyId);
      const todoList = todoListData[studyId];
      const body = (await request.json()) as EditTodoRequest;

      if (!body || !todoList) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }
      const { todoName, todoId } = body;

      const targetTodo = todoList.todos.find((todo) => todo.todoId === todoId);
      if (!targetTodo) {
        return new HttpResponse(JSON.stringify({ message: '존재하지 않는 투두입니다.' }), {
          status: 404,
        });
      }

      targetTodo.todoName = todoName;

      return new HttpResponse(JSON.stringify({ message: '투두가 수정되었습니다.' }), {
        status: 200,
      });
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),
  http.patch(`/todos/:todoId/complete`, async ({ params, request }) => {
    try {
      const todoId = Number(params.todoId);
      const studyId = Number(params.studyId);
      const body = (await request.json()) as ToggleTodoRequest;
      const todoList = todoListData[studyId];
      if (!body || !todoId || !studyId || !todoList) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }
      const { isCompleted } = body;

      const targetTodo = todoList.todos.find((todo) => todo.todoId === todoId);
      if (!targetTodo) {
        return new HttpResponse(JSON.stringify({ message: '존재하지 않는 투두입니다.' }), {
          status: 404,
        });
      }

      targetTodo.isCompleted = isCompleted;

      return new HttpResponse(JSON.stringify({ message: '투두가 수정되었습니다.' }), {
        status: 200,
      });
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),
  http.get(`/rooms/:studyId/notices`, ({ params }) => {
    const studyId = params.studyId;
    const notice = dummyNotices[Number(studyId)];
    if (notice && studyId) return HttpResponse.json(notice);
    return HttpResponse.error();
  }),
  http.put('/rooms/:studyId/notices', async ({ params, request }) => {
    try {
      const studyId = Number(params.studyId);
      const body = (await request.json()) as NoticeRequest;
      const notice = dummyNotices[studyId];

      if (!body || !studyId || !notice) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }

      const { content } = body;
      notice.content = content;

      return new HttpResponse(
        JSON.stringify({
          message: '공지가 수정되었습니다.',
        }),
        { status: 200 },
      );
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),
  http.post('/rooms/:studyId/notices', async ({ params, request }) => {
    try {
      const studyId = Number(params.studyId);
      const body = (await request.json()) as NoticeRequest;
      const targetStudy = dummyStudyList.find((dummyStudy) => dummyStudy.roomId === studyId);
      const { content } = body;

      if (!body || !studyId || !targetStudy) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }
      const newNotice = {
        noticeId: studyId,
        content: content,
        created: '2025-02-06T12:00:00',
      };
      targetStudy.hasNotice = true;
      dummyNotices[studyId] = newNotice;

      return new HttpResponse(
        JSON.stringify({
          message: '공지가 등록되었습니다.',
        }),
        { status: 200 },
      );
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),
  http.delete('/rooms/:studyId/notices', async ({ params }) => {
    try {
      const studyId = Number(params.studyId);
      const notice = dummyNotices[studyId];
      const targetStudy = dummyStudyList.find((dummyStudy) => dummyStudy.roomId === studyId);

      if (!studyId || !notice || !targetStudy) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), {
          status: 400,
        });
      }

      delete dummyNotices[studyId];
      targetStudy.hasNotice = false;
      return new HttpResponse(
        JSON.stringify({
          message: '공지가 삭제되었습니다.',
        }),
        { status: 200 },
      );
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),
  http.get('/timers/:studyId', async ({ params }) => {
    try {
      const studyId = Number(params.studyId);
      const timers = timersData[studyId];
      if (!studyId || !timers) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), {
          status: 400,
        });
      }
      timers.forEach((timer) => {
        if (timer.isRunning) {
          timer.timerTime += 1;
        }
      });
      return HttpResponse.json(timers);
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),
  http.post('/timer/start/:studyId', async ({ params, request }) => {
    try {
      const studyId = Number(params.studyId);
      const body = (await request.json()) as TimerRequest;

      if (!studyId || !body) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), {
          status: 400,
        });
      }
      const { userId, todoId } = body;
      const userData = timersData[studyId].find((data) => data.userId === userId);
      const todoData = todoListData[studyId].todos.find((todo) => todo.todoId === todoId);
      if (!userData || !todoData) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), {
          status: 400,
        });
      }
      userData.isRunning = true;
      todoData.isRunning = true;

      return new HttpResponse(
        JSON.stringify({
          message: '타이머가 시작 되었습니다.',
        }),
        { status: 200 },
      );
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),
  http.post('/timer/stop/:studyId', async ({ params, request }) => {
    try {
      const studyId = Number(params.studyId);
      const body = (await request.json()) as TimerRequest;

      if (!studyId || !body) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), {
          status: 400,
        });
      }
      const { userId, todoId } = body;
      const userData = timersData[studyId].find((data) => data.userId === userId);
      const todoData = todoListData[studyId].todos.find((todo) => todo.todoId === todoId);
      if (!userData || !todoData) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), {
          status: 400,
        });
      }
      userData.isRunning = false;
      todoData.isRunning = false;
      return new HttpResponse(
        JSON.stringify({
          message: '타이머가 중지 되었습니다.',
        }),
        { status: 200 },
      );
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),
];
export default studyMainHandlers;
