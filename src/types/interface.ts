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
  deposit: number;
  goalTime: number;
  recruitEndAt: string;
  studyEndAt: string;
}

export interface StudyRoomGetType extends StudyRoomPostType {
  currentMembers: number;
  studyStartAt: string;
  status: string;
  recruitId?: number;
  roomId?: number;
}

export interface StudyDetailType extends StudyRoomGetType {
  leaderId: number;
  leaderNickName: string;
}

export interface StudyOngoingType {
  roomId: number;
  leaderId: number;
  leaderNickname: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  goalTime: number;
  deposit: number;
  studyStartAt: string;
  studyEndAt: string;
  currentMembers: number;
  status: string;
  hasNotice: boolean;
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
  category: string;
}
export type StudyItemType = UpcomingStudyItem | OnGoingStudyItem | CompletedStudyItem;
export type StudyStatusType = 'ongoing' | 'upcoming' | 'completed';
export interface IUserPoints {
  totalPoints: number;
  totalRewardPoints: number;
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
export type PointFilterType = '전체' | '충전' | '차감' | '출금' | '보상' | '환불';
export interface StudyDetail {
  title: string;
  description: string;
  tags: string[];
}
export interface ModifyNickNameProps {
  currentNickName: string;
  setError: (error: string) => void;
  userId: number;
}
export interface TodoListType {
  studyTotalTime: number;
  todos: TodoType[];
}
export interface TodoType {
  todoId: number;
  todoName: string;
  isCompleted: boolean;
  studyTime: number;
  isRunning: boolean;
}
export interface NoticeType {
  noticeId: number;
  content: string;
  created: string;
}
export interface TimerType {
  userId: number;
  nickname: string;
  timerTime: number;
  isRunning: boolean;
}

export type pageType = 'recruits' | 'rooms';
