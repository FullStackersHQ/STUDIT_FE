import { useMutation } from '@tanstack/react-query';
import studyMainApi from '../../api/studyMainApi';

export default function useToggleTimer(studyId: number, userId: number) {
  const startMutation = useMutation({
    mutationFn: (todoId: number) => studyMainApi.startTimer(studyId, userId, todoId),
  });

  const stopMutation = useMutation({
    mutationFn: (todoId: number) => studyMainApi.stopTimer(studyId, userId, todoId),
  });

  return {
    postStartTimer: startMutation.mutate,
    postStopTimer: stopMutation.mutate,
  };
}
