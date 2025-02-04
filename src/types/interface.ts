export interface UserProfile {
  userId: number;
  nickName: string;
  points: number;
  applied: number;
  in_progress: number;
  completed: number;
  profileImage: string;
}
export interface AvgStats {
  userId: number;
  userTodoCompletion: number;
  averageTodoCompletion: number;
  userStudyTime: number;
  averageStudyTime: number;
}
