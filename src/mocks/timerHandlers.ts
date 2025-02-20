import { http, HttpResponse } from 'msw';
import { timersData, todoListData } from './data/studyDetailMockData';
import { TimerRequest } from '../types/request';

setInterval(() => {
  Object.values(timersData).forEach((timers) => {
    timers.forEach((timer) => {
      if (timer.isRunning) {
        timer.timerTime += 1;
      }
    });
  });
}, 1000);

const activeTimers: Record<number, number | undefined> = {};
function startTimer(studyId: number) {
  if (activeTimers[studyId]) {
    return;
  }

  activeTimers[studyId] = window.setInterval(() => {
    const hasRunningTodo = todoListData[studyId]?.todos.some((todo) => todo.isRunning);
    if (!hasRunningTodo) {
      stopTimer(studyId);
      return;
    }
    todoListData[studyId].studyTotalTime += 1;
    todoListData[studyId].todos = todoListData[studyId].todos.map((todo) =>
      todo.isRunning ? { ...todo, studyTime: todo.studyTime + 1 } : todo,
    );
  }, 1000);
}

function stopTimer(studyId: number) {
  if (activeTimers[studyId]) {
    clearInterval(activeTimers[studyId]!);
    delete activeTimers[studyId];
  }
}

const timerHandlers = [
  http.get('/timers/:studyId', async ({ params }) => {
    try {
      const studyId = Number(params.studyId);
      const timers = timersData[studyId];
      if (!studyId || !timers) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), {
          status: 400,
        });
      }

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

      startTimer(studyId);

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
      stopTimer(studyId);

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
export default timerHandlers;
