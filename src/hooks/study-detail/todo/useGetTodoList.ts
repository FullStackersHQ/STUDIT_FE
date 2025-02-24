import { useQuery } from '@tanstack/react-query';
import studyMainApi from '../../../api/studyMainApi';
import { TodoListType } from '../../../types/interface';

export default function useGetTodoList(studyId: number) {
  const {
    data: todoList,
    isLoading: todoListLoading,
    refetch: refetchTodoList,
  } = useQuery<TodoListType>({
    queryKey: ['getTodoList', studyId],
    queryFn: () => studyMainApi.getTodoList(studyId),
  });
  return { todoList, todoListLoading, refetchTodoList };
}
