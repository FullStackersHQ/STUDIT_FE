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
export interface StudyRoomType {
  recruitId: number;
  title: string;
  category: string;
  max_members: number;
  current_members: number;
  tags: string[];
  study_start_at: string;
  recruit_end_date: string;
  study_end_at: string;
  status: string;
}
export interface FilterType {
  category: string;
  search: string;
  studyTimeRange: [number, number];
  point: [number, number];
}