import { useMutation } from '@tanstack/react-query';
import studyDefaultApi from '../../api/studyMainApi';
import useGetTodoList from './useGetTodoList';

export default function useToggleTodo(studyId: number) {
  const { refetchTodoList } = useGetTodoList(studyId);

  const mutation = useMutation({
    mutationFn: ({ todoId, isCompleted }: { todoId: number; isCompleted: boolean }) =>
      studyDefaultApi.toggleTodoStatus(studyId, todoId, isCompleted),
    onSuccess: () => refetchTodoList(),
  });

  return { mutateTodo: mutation.mutate };
}
