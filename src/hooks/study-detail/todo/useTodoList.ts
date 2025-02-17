import useGetTodoList from './useGetTodoList';
import useTodoState from './useTodoState';
import useToggleTodo from './useToggleTodo';

export default function useTodoList(studyId: number) {
  const { todoList, todoListLoading } = useGetTodoList(studyId);
  const { todoStates, toggleTodo } = useTodoState(todoList);
  const { mutateTodo } = useToggleTodo(studyId);

  const handleCheckboxChange = (todoId: number, isCompleted: boolean) => {
    mutateTodo({ todoId, isCompleted });
    toggleTodo(todoId);
  };

  return {
    todoList,
    todoListLoading,
    todoStates,
    handleCheckboxChange,
  };
}
