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
  maxMembers?: number;
  currentMembers?: number;
  tags: string[];
  studyStartAt: string;
  recruitEndAt: string;
  studyEndAt: string;
  status: string;
  description?: string;
  deposit?: string;
  goalTime?: string;
}

export interface StudyRecruitType extends StudyRoomType {
  leader: {
    userId: number;
    username: string;
  };
}

export interface FilterType {
  category: string;
  search: string;
  studyTimeRange: [number, number];
  point: [number, number];
}
export interface UpcomingStudyItem extends StudyItem {
  recruit_id: number;
}
export interface OnGoingStudyItem extends StudyItem {
  registerId: number;
}
export interface CompletedStudyItem extends StudyItem {
  studyId: number;
  deductedPoint: number;
  obtainedPoint: number;
}
export interface StudyItem {
  gatherDate: string;
  title: string;
  enterPoint: number;
  tag: string;
  weeklyStudyTime: number;
}
export type StudyItemType = UpcomingStudyItem | OnGoingStudyItem | CompletedStudyItem;
export type StudyStatusType = 'ongoing' | 'upcoming' | 'completed';
export interface IUserPoints {
  totalPoints: number;
  totalChargedPoints: number;
  totalDeductedPoints: number;
  totalWithdrawnPoints: number;
}
export interface PointRecord {
  id: number;
  type: PointFilterType;
  amount: number;
  total_after: number;
  time: string;
}
export interface GroupedByDate {
  [date: string]: PointRecord[];
}
export type PointFilterType = '전체' | '충전' | '차감' | '출금';
