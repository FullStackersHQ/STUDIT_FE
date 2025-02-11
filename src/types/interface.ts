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

export interface StudyRoomPutType {
  title: string;
  description: string;
  category: string;
  tags: string[];
  maxMembers: number;
}

export interface StudyRoomPostType extends StudyRoomPutType {
  deposit: string;
  goalTime: string;
  recruitEndAt: string;
  studyEndAt: string;
}

export interface StudyRoomGetType extends StudyRoomPostType {
  recruitId: number;
  currentMembers: number;
  studyStartAt: string;
  status: string;
}

export interface StudyRecruitType extends StudyRoomGetType {
  leaderId: number;
  leaderNickName: string;
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
  date: string;
  records: PointRecord[];
}
export type PointFilterType = '전체' | '충전' | '차감' | '출금';

export interface WithdrawRequest extends Record<string, unknown> {
  amount: number;
}
export interface ModifyNickNameProps {
  currentNickName: string;
  setError: (error: string) => void;
  userId: number;
}
