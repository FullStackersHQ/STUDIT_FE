import { useEffect } from 'react';
import { TodoListType, TodoType, TimerType } from '../../../types/interface';
import studyMainApi from '../../../api/studyMainApi';
import * as Sentry from '@sentry/react';

export default function useSyncWithServer(
  studyId: number,
  setLocalTodoList: React.Dispatch<React.SetStateAction<TodoListType>>,
  setTimers: React.Dispatch<React.SetStateAction<TimerType[]>>,
) {
  useEffect(() => {
    const syncWithServer = setInterval(async () => {
      try {
        const [todoData, timerData] = await Promise.all([
          studyMainApi.getTodoList(studyId),
          studyMainApi.getTimers(studyId),
        ]);

        if (!todoData || !todoData.todos || !timerData) return;

        setLocalTodoList((prev) => {
          const totalTimeDiff = Math.abs(todoData.studyTotalTime - prev.studyTotalTime);
          return {
            ...prev,
            studyTotalTime: totalTimeDiff > 1 ? todoData.studyTotalTime : prev.studyTotalTime,
            todos: prev.todos.map((todo) => {
              const serverTodo = todoData.todos.find((sTodo: TodoType) => sTodo.todoId === todo.todoId);
              if (!serverTodo) return todo;

              const studyTimeDiff = Math.abs(serverTodo.studyTime - todo.studyTime);
              return {
                ...todo,
                studyTime: studyTimeDiff > 1 ? serverTodo.studyTime : todo.studyTime,
              };
            }),
          };
        });

        setTimers((prev) =>
          prev.map((clientTimer) => {
            const serverTimer = timerData.find((s: TimerType) => s.userId === clientTimer.userId);
            if (serverTimer) {
              if (Math.abs(serverTimer.timerTime - clientTimer.timerTime) > 1) {
                return { ...clientTimer, timerTime: serverTimer.timerTime };
              }
            }
            return clientTimer;
          }),
        );
      } catch (error) {
        Sentry.captureException(error);
      }
    }, 5000);

    return () => clearInterval(syncWithServer);
  }, [studyId, setLocalTodoList, setTimers]);
}
