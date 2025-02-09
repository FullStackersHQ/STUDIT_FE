import {
  UserProfile,
  AvgStats,
  StudyRoomType,
  UpcomingStudyItem,
  OnGoingStudyItem,
  CompletedStudyItem,
  IUserPoints,
  GroupedByDate,
} from '../../types/interface';

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
  {
    recruitId: 4,
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
  {
    recruitId: 5,
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
export const upcomingStudies: UpcomingStudyItem[] = [
  {
    recruit_id: 1,
    gatherDate: '2025.03.01 ~ 2025.08.01',
    title: '8월 CPA 준비 스터디',
    enterPoint: 3000,
    tag: 'CPA',
    weeklyStudyTime: 10,
  },
  {
    recruit_id: 2,
    gatherDate: '2025.05.15 ~ 2025.11.15',
    title: '프론트엔드 개발 스터디',
    enterPoint: 2000,
    tag: '프론트엔드',
    weeklyStudyTime: 8,
  },
];

export const ongoingStudies: OnGoingStudyItem[] = [
  {
    registerId: 1,
    gatherDate: '2024.11.01 ~ 2025.05.01',
    title: 'SAT 준비 스터디',
    enterPoint: 5000,
    tag: 'SAT',
    weeklyStudyTime: 12,
  },
  {
    registerId: 2,
    gatherDate: '2024.10.01 ~ 2025.04.01',
    title: '영어 회화 스터디',
    enterPoint: 3000,
    tag: '영어',
    weeklyStudyTime: 6,
  },
];

export const completedStudies: CompletedStudyItem[] = [
  {
    studyId: 1,
    deductedPoint: 100,
    obtainedPoint: 200,
    gatherDate: '2024.12.15 ~ 2025.01.15',
    title: 'C++ 프로그래밍 스터디',
    enterPoint: 5000,
    tag: 'C++',
    weeklyStudyTime: 8,
  },
  {
    studyId: 2,
    deductedPoint: 50,
    obtainedPoint: 1500,
    gatherDate: '2024.11.10 ~ 2024.12.10',
    title: '웹 개발 프로젝트 스터디',
    enterPoint: 3000,
    tag: '웹 개발',
    weeklyStudyTime: 10,
  },
  {
    studyId: 3,
    deductedPoint: 2000,
    obtainedPoint: 350,
    gatherDate: '2024.10.05 ~ 2024.11.05',
    title: 'Java 알고리즘 스터디',
    enterPoint: 4000,
    tag: 'Java',
    weeklyStudyTime: 12,
  },
];

export const UserPoints: IUserPoints = {
  totalPoints: 50000,
  totalChargedPoints: 70000,
  totalDeductedPoints: 15000,
  totalWithdrawnPoints: 5000,
};

export const AllPointRecords: GroupedByDate = {
  '2024.02.12': [
    {
      id: 5,
      type: '차감',
      amount: 15000,
      total_after: 35000,
      time: '11:20:00',
    },
  ],
  '2024.02.11': [
    {
      id: 4,
      type: '출금',
      amount: 20000,
      total_after: 50000,
      time: '16:45:00',
    },
  ],
  '2024.02.10': [
    {
      id: 3,
      type: '충전',
      amount: 30000,
      total_after: 70000,
      time: '09:00:00',
    },
  ],
  '2024.02.09': [
    {
      id: 2,
      type: '차감',
      amount: 10000,
      total_after: 40000,
      time: '14:15:00',
    },
  ],
  '2024.02.08': [
    {
      id: 1,
      type: '충전',
      amount: 50000,
      total_after: 50000,
      time: '10:30:00',
    },
  ],
};

export const ToppedUpPoints: GroupedByDate = {
  '2024.02.12': [
    {
      id: 5,
      type: '충전',
      amount: 15000,
      total_after: 35000,
      time: '11:20:00',
    },
  ],
  '2024.02.11': [
    {
      id: 4,
      type: '충전',
      amount: 20000,
      total_after: 50000,
      time: '16:45:00',
    },
  ],
  '2024.02.10': [
    {
      id: 3,
      type: '충전',
      amount: 30000,
      total_after: 70000,
      time: '09:00:00',
    },
  ],
  '2024.02.09': [
    {
      id: 2,
      type: '충전',
      amount: 10000,
      total_after: 40000,
      time: '14:15:00',
    },
  ],
  '2024.02.08': [
    {
      id: 1,
      type: '충전',
      amount: 50000,
      total_after: 50000,
      time: '10:30:00',
    },
  ],
};
export const DeductedPoints: GroupedByDate = {
  '2024.02.12': [
    {
      id: 5,
      type: '차감',
      amount: 15000,
      total_after: 35000,
      time: '11:20:00',
    },
  ],
  '2024.02.11': [
    {
      id: 4,
      type: '차감',
      amount: 20000,
      total_after: 50000,
      time: '16:45:00',
    },
  ],
  '2024.02.10': [
    {
      id: 3,
      type: '차감',
      amount: 30000,
      total_after: 70000,
      time: '09:00:00',
    },
  ],
  '2024.02.09': [
    {
      id: 2,
      type: '차감',
      amount: 10000,
      total_after: 40000,
      time: '14:15:00',
    },
  ],
  '2024.02.08': [
    {
      id: 1,
      type: '차감',
      amount: 50000,
      total_after: 50000,
      time: '10:30:00',
    },
  ],
};

export const WithDrawnPoints: GroupedByDate = {
  '2024.02.12': [
    {
      id: 5,
      type: '출금',
      amount: 15000,
      total_after: 35000,
      time: '11:20:00',
    },
  ],
  '2024.02.11': [
    {
      id: 4,
      type: '출금',
      amount: 20000,
      total_after: 50000,
      time: '16:45:00',
    },
  ],
  '2024.02.10': [
    {
      id: 3,
      type: '출금',
      amount: 30000,
      total_after: 70000,
      time: '09:00:00',
    },
  ],
  '2024.02.09': [
    {
      id: 2,
      type: '출금',
      amount: 10000,
      total_after: 40000,
      time: '14:15:00',
    },
  ],
  '2024.02.08': [
    {
      id: 1,
      type: '출금',
      amount: 50000,
      total_after: 50000,
      time: '10:30:00',
    },
  ],
};
