import { UserProfile, AvgStats, StudyRoomType } from '../../types/interface';

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

export const mockStudyRoomList: StudyRoomType[] = [
  {
    recruitId: 1,
    title: 'Spring Boot 스터디',
    category: '코딩',
    tags: ['Spring', 'Java'],
    study_start_at: '2025-02-11T00:00:00',
    study_end_at: '2025-04-11T00:00:00',
    recruit_end_date: '2025-02-10T23:59:59',
    current_members: 3,
    max_members: 5,
    status: '모집중',
  },
  {
    recruitId: 2,
    title: '공무원 시험 준비 스터디',
    category: '공무원',
    tags: ['국어', '영어', '한국사'],
    study_start_at: '2025-03-01T00:00:00',
    study_end_at: '2025-09-11T00:00:00',
    recruit_end_date: '2025-02-24T23:59:59',
    current_members: 2,
    max_members: 6,
    status: '모집중',
  },
  {
    recruitId: 3,
    title: '단기 토익 공부방',
    category: '어학',
    tags: ['토익', '영어'],
    study_start_at: '2025-02-11T00:00:00',
    study_end_at: '2025-03-01T00:00:00',
    recruit_end_date: '2025-02-1T23:59:59',
    current_members: 2,
    max_members: 6,
    status: '진행중',
  },
];
