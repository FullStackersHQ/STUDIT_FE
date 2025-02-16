import { http, HttpResponse } from 'msw';
import { todoListData, dummyStudyList, dummyNotices, mockStudyRoomList } from './data/dummy';
import {
  CreateTodoRequest,
  UpdateStudyRequest,
  EditTodoRequest,
  ToggleTodoRequest,
  NoticeRequest,
} from '../types/request';
import { TodoType } from '../types/interface';

const studyMainHandlers = [
  // 스터디룸 목록 조회
  http.get(`/api/rooms`, ({ request }) => {
    console.log('스터디 목록 조회');
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = 5;
    const start = (page - 1) * limit;
    const end = start + limit;
    const hasNextPage = end < mockStudyRoomList.length;

    return HttpResponse.json({
      status: 'OK',
      code: 200,
      message: '스터디 목록이 조회 되었습니다.',
      result: {
        rooms: mockStudyRoomList.slice(start, end),
        nextPage: hasNextPage ? page + 1 : null,
      },
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
  http.get('/todos/1', () => {
    if (todoListData) return HttpResponse.json(todoListData);
    return HttpResponse.error();
  }),
  http.post('/todos/new', async ({ request }) => {
    try {
      const body = (await request.json()) as CreateTodoRequest;

      if (!body) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }
      const { todoName } = body;
      const newTodo: TodoType = {
        todoId: 3,
        todoName: todoName as string,
        isCompleted: false,
        totalStudyTime: '0:00:00',
      };

      todoListData.todos.push(newTodo);

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
  http.patch('/todos/change', async ({ request }) => {
    try {
      const body = (await request.json()) as EditTodoRequest;

      if (!body) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }
      const { todoName, todoId } = body;

      const targetTodo = todoListData.todos.find((todo) => todo.todoId === todoId);
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
      const body = (await request.json()) as ToggleTodoRequest;
      const todoId = params.todoId;
      if (!body || !todoId) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }
      const { isCompleted } = body;

      const targetTodo = todoListData.todos.find((todo) => todo.todoId === Number(todoId));
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
      console.log(notice);
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
        noticeId: 3,
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
];
export default studyMainHandlers;
