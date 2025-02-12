import { http, HttpResponse } from 'msw';
import { StudyDetailData, TodoListData } from './data/dummy';
import { CreateTodoRequest, UpdateStudyRequest, EditTodoRequest, ToggleTodoRequest } from '../types/request';
import { TodoType } from '../types/interface';

const studyMainHandlers = [
  http.get(`/rooms/1`, () => {
    if (StudyDetailData) return HttpResponse.json(StudyDetailData);
    return HttpResponse.error();
  }),
  http.put(`/rooms/1`, async ({ request }) => {
    try {
      const body = (await request.json()) as UpdateStudyRequest;
      if (!body) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }
      const { title, tags, description } = body;
      StudyDetailData.description = description;
      StudyDetailData.tags = tags;
      StudyDetailData.title = title;
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
    if (TodoListData) return HttpResponse.json(TodoListData);
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

      TodoListData.todos.push(newTodo);

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

      const targetTodo = TodoListData.todos.find((todo) => todo.todoId === todoId);
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

      const targetTodo = TodoListData.todos.find((todo) => todo.todoId === Number(todoId));
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
];
export default studyMainHandlers;
