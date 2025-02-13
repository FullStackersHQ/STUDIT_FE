export interface WithdrawRequest extends Record<string, unknown> {
  amount: number;
}
export interface UpdateStudyRequest extends Record<string, unknown> {
  title: string;
  tags: string[];
  description: string;
}
export interface CreateTodoRequest extends Record<string, unknown> {
  studyId: number;
  todoName: string;
}
export interface EditTodoRequest extends Record<string, unknown> {
  studyId: number;
  todoId: number;
  todoName: string;
}
export interface ToggleTodoRequest extends Record<string, unknown> {
  studyId: number;
  isCompleted: boolean;
}
