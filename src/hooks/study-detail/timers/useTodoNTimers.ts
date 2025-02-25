import useGetTimers from './useGetTimers';
import { useState, useEffect } from 'react';
import { TimerType, TodoListType } from '../../../types/interface';
import useGetTodoList from '../todo/useGetTodoList';
import useSyncWithServer from './useSyncWithServer';
import useTodoState from '../todo/useTodoState';
import useToggleTodo from '../todo/useToggleTodo';

export default function useTodoNTimers(studyId: number, userId: number) {
  const { todoList, todoListLoading } = useGetTodoList(studyId);
  const { todoStates, toggleTodo } = useTodoState(todoList);
  const { mutateTodo } = useToggleTodo(studyId);
  const { timers: initialTimers, isTimerLoading } = useGetTimers(studyId);

  const [localTodoList, setLocalTodoList] = useState<TodoListType>({ studyTotalTime: 0, todos: [] });
  const [timers, setTimers] = useState<TimerType[]>([]);

  useEffect(() => {
    if (todoList) setLocalTodoList(todoList);
  }, [todoList]);

  useEffect(() => {
    if (initialTimers) {
      setTimers(initialTimers);
    }
  }, [initialTimers]);

  useSyncWithServer(studyId, localTodoList, setLocalTodoList, setTimers, userId);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimers((prev) =>
        prev.map((timer) => (timer.isRunning ? { ...timer, timerTime: timer.timerTime + 1 } : timer)),
      );
      setLocalTodoList((prev) => {
        const hasRunningTodo = prev.todos.some((todo) => todo.isRunning);
        return {
          ...prev,
          studyTotalTime: hasRunningTodo ? prev.studyTotalTime + 1 : prev.studyTotalTime,
          todos: prev.todos.map((todo) => (todo.isRunning ? { ...todo, studyTime: todo.studyTime + 1 } : todo)),
        };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timers, localTodoList.todos]);

  const handleCheckboxChange = (todoId: number, isCompleted: boolean) => {
    mutateTodo({ todoId, isCompleted });
    toggleTodo(todoId);
  };

  return {
    todoList: localTodoList,
    todoListLoading,
    timers,
    setTimers,
    isTimerLoading,
    todoStates,
    handleCheckboxChange,
    setLocalTodoList,
  };
}
