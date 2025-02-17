import useGetTimers from './useGetTimers';
import { useState, useEffect } from 'react';
import { TimerType } from '../../types/interface';
import useGetTodoList from './todo/useGetTodoList';

export default function useTimers(studyId: number) {
  const { timers: initialTimers, isTimerLoading, refetchTimers } = useGetTimers(studyId);
  const [timers, setTimers] = useState<TimerType[]>([]);
  const { refetchTodoList } = useGetTodoList(studyId);
  const [activeTodoId, setActiveTodoId] = useState<number | null>(null);

  useEffect(() => {
    if (initialTimers) {
      setTimers(initialTimers);
    }
  }, [initialTimers]);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval> | null = null;

    intervalId = setInterval(() => {
      refetchTimers();
      if (activeTodoId) refetchTodoList();
    }, 1000);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTodoId]);

  return { timers, isTimerLoading, activeTodoId, setActiveTodoId };
}
