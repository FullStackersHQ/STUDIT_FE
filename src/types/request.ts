export interface PointRequest extends Record<string, unknown> {
  amount: number;
}
export interface UpdateStudyRequest extends Record<string, unknown> {
  title: string;
  tags: string[];
  description: string;
}
export interface CreateTodoRequest extends Record<string, unknown> {
  todoName: string;
}
export interface EditTodoRequest extends Record<string, unknown> {
  todoId: number;
  todoName: string;
}
export interface ToggleTodoRequest extends Record<string, unknown> {
  studyId: number;
  isCompleted: boolean;
}
export interface NoticeRequest extends Record<string, unknown> {
  content: string;
}
export interface TimerRequest extends Record<string, unknown> {
  todoId: number;
  userId: number;
}
