import { UserProfile, AvgStats } from '../../types/interface';

export const ProfileData: UserProfile = {
  userId: 1,
  nickName: '지식 헌터',
  points: 2000,
  applied: 1,
  in_progress: 2,
  completed: 2,
  profileImage: 'https://placehold.co/48x48',
};

export const AvgStatsData: AvgStats = {
  userId: 1,
  userTodoCompletion: 100,
  averageTodoCompletion: 65,
  userStudyTime: 100,
  averageStudyTime: 352,
};
