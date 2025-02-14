import { useQuery } from '@tanstack/react-query';
import studyApi from '../../../api/studyMainApi';
import { TodoListType } from '../../../types/interface';

export default function useGetTodoList(studyId: number) {
  const {
    data: todoList,
    isLoading: todoListLoading,
    refetch: refetchTodoList,
  } = useQuery<TodoListType>({
    queryKey: ['getTodoList'],
    queryFn: () => studyApi.getTodoList(studyId),
  });
  return { todoList, todoListLoading, refetchTodoList };
}
