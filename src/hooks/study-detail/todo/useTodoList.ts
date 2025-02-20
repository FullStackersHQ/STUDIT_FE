import useGetTodoList from './useGetTodoList';
import useTodoState from './useTodoState';
import useToggleTodo from './useToggleTodo';
import { useState, useEffect } from 'react';
import { TodoListType, TodoType } from '../../../types/interface';
import studyMainApi from '../../../api/studyMainApi';
import * as Sentry from '@sentry/react';

export default function useTodoList(studyId: number) {
  const { todoList, todoListLoading } = useGetTodoList(studyId);
  const { todoStates, toggleTodo } = useTodoState(todoList);
  const { mutateTodo } = useToggleTodo(studyId);
  const [localTodoList, setLocalTodoList] = useState<TodoListType>({ studyTotalTime: 0, todos: [] });

  useEffect(() => {
    if (todoList) setLocalTodoList(todoList);
  }, [todoList]);

  useEffect(() => {
    const hasRunningTodo = localTodoList.todos.find((todo) => todo.isRunning);
    if (!hasRunningTodo) return;
    const localTimer = setInterval(() => {
      setLocalTodoList((prev: TodoListType) => {
        const hasRunningTodo = prev.todos.some((todo) => todo.isRunning);

        return {
          ...prev,
          studyTotalTime: hasRunningTodo ? prev.studyTotalTime + 1 : prev.studyTotalTime,
          todos: prev.todos.map((todo) => (todo.isRunning ? { ...todo, studyTime: todo.studyTime + 1 } : todo)),
        };
      });
    }, 1000);

    return () => clearInterval(localTimer);
  }, [localTodoList.todos]);

  useEffect(() => {
    const syncWithServer = setInterval(async () => {
      try {
        const data = await studyMainApi.getTodoList(studyId);
        if (!data || !data.todos) return;

        setLocalTodoList((prev) => {
          const totalTimeDiff = Math.abs(data.studyTotalTime - prev.studyTotalTime);
          const hasRunningTodo = prev.todos.find((todo) => todo.isRunning);
          return {
            ...prev,
            studyTotalTime: totalTimeDiff > 1 ? data.studyTotalTime : prev.studyTotalTime + (hasRunningTodo ? 1 : 0),
            todos: prev.todos.map((todo) => {
              const serverTodo = data.todos.find((sTodo: TodoType) => sTodo.todoId === todo.todoId);
              if (!serverTodo) return todo;

              const studyTimeDiff = Math.abs(serverTodo.studyTime - todo.studyTime);
              return {
                ...todo,
                studyTime: studyTimeDiff > 1 ? serverTodo.studyTime : todo.studyTime + (todo.isRunning ? 1 : 0),
              };
            }),
          };
        });
      } catch (error) {
        Sentry.captureException(error);
      }
    }, 5000);

    return () => {
      clearInterval(syncWithServer);
    };
  }, [studyId]);

  const handleCheckboxChange = (todoId: number, isCompleted: boolean) => {
    mutateTodo({ todoId, isCompleted });
    toggleTodo(todoId);
  };

  return {
    todoList: localTodoList,
    todoListLoading,
    todoStates,
    handleCheckboxChange,
    setLocalTodoList,
  };
}
