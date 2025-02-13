import { useMutation } from '@tanstack/react-query';
import studyDefaultApi from '../../../api/studyMainApi';
import useGetTodoList from './useGetTodoList';

export default function useCreateTodo({
  studyId,
  newTodo,
  setNewTodo,
  setIsAdding,
}: {
  studyId: number;
  newTodo: string;
  setNewTodo: (prev: string) => void;
  setIsAdding: (prev: boolean) => void;
}) {
  const { refetchTodoList } = useGetTodoList(studyId);
  const mutation = useMutation({
    mutationFn: async () => await studyDefaultApi.createTodo(studyId, newTodo),
    onSuccess: () => {
      refetchTodoList();
      setIsAdding(false);
      setNewTodo('');
    },
  });
  return { createTodo: mutation.mutate };
}
