import { http, HttpResponse } from 'msw';
import { todoListData } from './data/studyDetailMockData';
import { CreateTodoRequest, EditTodoRequest, ToggleTodoRequest } from '../types/request';
import { TodoType } from '../types/interface';

const todoHandlers = [
  http.get('/todos/:studyId', ({ params }) => {
    const studyId = Number(params.studyId);
    const todoList = todoListData[studyId];
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
        todoId: todoList.todos.length + 1,
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
  http.patch('/todos/change/:studyId', async ({ params, request }) => {
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
  http.patch(`/todos/complete/:studyId`, async ({ params, request }) => {
    try {
      const studyId = Number(params.studyId);
      const body = (await request.json()) as ToggleTodoRequest;
      const todoList = todoListData[studyId];
      if (!body || !studyId || !todoList) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }
      const { todoId, isCompleted } = body;
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
];
export default todoHandlers;
