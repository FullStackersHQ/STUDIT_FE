import useToggleTimer from '../useToggleTimer';

export default function useTodoTimer({
  studyId,
  userId,
  activeTodoId,
  setActiveTodoId,
}: {
  studyId: number;
  userId: number;
  activeTodoId: number | null;
  setActiveTodoId: (pre: number | null) => void;
}) {
  const { postStartTimer, postStopTimer } = useToggleTimer(studyId, userId);
  const startTimer = (todoId: number) => {
    if (activeTodoId !== null) {
      stopTimer(todoId);
    }
    postStartTimer(todoId);
    setActiveTodoId(todoId);
  };

  const stopTimer = (todoId: number) => {
    postStopTimer(todoId);
    setActiveTodoId(null);
  };

  return { startTimer, stopTimer };
}
