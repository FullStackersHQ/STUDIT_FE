import useGetTimers from './useGetTimers';
import { useState, useEffect } from 'react';
import { TimerType } from '../../types/interface';
import studyMainApi from '../../api/studyMainApi';
import * as Sentry from '@sentry/react';

export default function useTimers(studyId: number) {
  const { timers: initialTimers, isTimerLoading } = useGetTimers(studyId);
  const [timers, setTimers] = useState<TimerType[]>([]);

  useEffect(() => {
    if (initialTimers) {
      setTimers(initialTimers);
    }
  }, [initialTimers]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimers((prev) =>
        prev.map((timer) => (timer.isRunning ? { ...timer, timerTime: timer.timerTime + 1 } : timer)),
      );
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const syncWithServer = setInterval(async () => {
      try {
        const data = await studyMainApi.getTimers(studyId);
        if (!data) return;

        setTimers((prev) =>
          prev.map((clientTimer) => {
            const serverTimer = data.find((s: TimerType) => s.userId === clientTimer.userId);

            if (!serverTimer) return clientTimer;

            if (Math.abs(serverTimer.timerTime - clientTimer.timerTime) > 1) {
              return { ...clientTimer, timerTime: serverTimer.timerTime };
            }

            return clientTimer;
          }),
        );
      } catch (error) {
        Sentry.captureException(error);
      }
    }, 5000);

    return () => clearInterval(syncWithServer);
  }, [studyId]);

  return { timers, isTimerLoading, setTimers };
}
