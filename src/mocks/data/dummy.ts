import {
  UserProfile,
  AvgStats,
  UpcomingStudyItem,
  OnGoingStudyItem,
  CompletedStudyItem,
  IUserPoints,
  GroupedByDate,
  StudyRecruitType,
  StudyDetail,
  TodoListType,
  StudyOngoingType,
  NoticeType,
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

export const mockStudyRoomList: StudyRecruitType[] = [
  {
    recruitId: 1,
    title: 'Spring Boot',
    category: '코딩',
    tags: ['Spring', 'Java'],
    studyStartAt: '2025-02-11T17',
    studyEndAt: '2025-04-11T17',
    recruitEndAt: '2025-02-11T17',
    currentMembers: 3,
    deposit: '10000',
    goalTime: '40',
    maxMembers: 5,
    status: 'ACTIVE',
    leaderId: 1001,
    leaderNickName: 'ABC',
    description: '123',
  },
  {
    recruitId: 2,
    title: '공무원 시험 준비',
    category: '공무원',
    tags: ['국어', '영어', '한국사'],
    studyStartAt: '2025-03-01T17',
    studyEndAt: '2025-09-11T17',
    recruitEndAt: '2025-03-01T17',
    currentMembers: 2,
    maxMembers: 6,
    status: 'ACTIVE',
    deposit: '10000',
    goalTime: '40',
    leaderId: 1002,
    leaderNickName: '1234',
    description: '1234',
  },
  {
    recruitId: 3,
    title: '단기 토익',
    category: '어학',
    tags: ['토익', '영어'],
    studyStartAt: '2025-02-11T16',
    studyEndAt: '2025-03-01T16',
    recruitEndAt: '2025-02-11T16',
    currentMembers: 2,
    maxMembers: 6,
    status: 'ACTIVE',
    deposit: '10000',
    goalTime: '40',
    leaderId: 1003,
    leaderNickName: '1235',
    description: '1235',
  },
  {
    recruitId: 4,
    title: '단기 공부방',
    category: '어학',
    tags: ['토익', '영어'],
    studyStartAt: '2025-02-11T08',
    studyEndAt: '2025-03-01T08',
    recruitEndAt: '2025-02-11T08',
    currentMembers: 2,
    maxMembers: 6,
    status: 'ACTIVE',
    deposit: '10000',
    goalTime: '40',
    leaderId: 1011,
    leaderNickName: '123',
    description: '123',
  },
  {
    recruitId: 5,
    title: '토익 공부방',
    category: '어학',
    tags: ['토익', '영어'],
    studyStartAt: '2025-02-11T08',
    studyEndAt: '2025-03-01T08',
    recruitEndAt: '2025-02-11T08',
    currentMembers: 2,
    maxMembers: 6,
    status: 'ACTIVE',
    deposit: '10000',
    goalTime: '40',
    leaderId: 1012,
    leaderNickName: '123',
    description: '123',
  },
  {
    recruitId: 6,
    title: '두달 토익 공부방',
    category: '어학',
    tags: ['토익', '영어'],
    studyStartAt: '2025-01-11T08',
    studyEndAt: '2025-03-11T08',
    recruitEndAt: '2025-01-11T08',
    currentMembers: 2,
    maxMembers: 6,
    status: 'ACTIVE',
    deposit: '10000',
    goalTime: '40',
    leaderId: 1001,
    leaderNickName: '123',
    description: '123',
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
  {
    recruit_id: 2,
    gatherDate: '2025.05.15 ~ 2025.11.15',
    title: '프론트엔드 개발 스터디',
    enterPoint: 2000,
    tag: '프론트엔드',
    weeklyStudyTime: 8,
  },
  {
    recruit_id: 2,
    gatherDate: '2025.05.15 ~ 2025.11.15',
    title: '프론트엔드 개발 스터디',
    enterPoint: 2000,
    tag: '프론트엔드',
    weeklyStudyTime: 8,
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
  totalRewardPoints: 70000,
  totalDeductedPoints: 15000,
  totalWithdrawnPoints: 5000,
};

export const AllPointRecords: GroupedByDate[] = [
  {
    date: '2024.02.09',
    records: [
      {
        id: 5,
        type: '차감',
        amount: 15000,
        total_after: 35000,
        time: '11:20:00',
      },
    ],
  },
  {
    date: '2024.02.08',
    records: [
      {
        id: 4,
        type: '출금',
        amount: 20000,
        total_after: 50000,
        time: '16:45:00',
      },
    ],
  },
  {
    date: '2024.01.30',
    records: [
      {
        id: 3,
        type: '충전',
        amount: 30000,
        total_after: 70000,
        time: '09:00:00',
      },
    ],
  },
  {
    date: '2024.01.09',
    records: [
      {
        id: 2,
        type: '차감',
        amount: 10000,
        total_after: 40000,
        time: '14:15:00',
      },
    ],
  },
  {
    date: '2024.01.08',
    records: [
      {
        id: 1,
        type: '충전',
        amount: 50000,
        total_after: 50000,
        time: '10:30:00',
      },
    ],
  },
  {
    date: '2024.02.07',
    records: [
      {
        id: 6,
        type: '출금',
        amount: 25000,
        total_after: 40000,
        time: '12:00:00',
      },
      {
        id: 7,
        type: '보상',
        amount: 5000,
        total_after: 45000,
        time: '15:30:00',
      },
    ],
  },
  {
    date: '2024.01.25',
    records: [
      {
        id: 8,
        type: '충전',
        amount: 20000,
        total_after: 60000,
        time: '08:45:00',
      },
      {
        id: 9,
        type: '차감',
        amount: 5000,
        total_after: 55000,
        time: '17:10:00',
      },
      {
        id: 10,
        type: '환불',
        amount: 6000,
        total_after: 49000,
        time: '18:20:00',
      },
    ],
  },
  {
    date: '2024.01.20',
    records: [
      {
        id: 11,
        type: '환불',
        amount: 7000,
        total_after: 43000,
        time: '13:05:00',
      },
      {
        id: 12,
        type: '차감',
        amount: 3000,
        total_after: 40000,
        time: '16:25:00',
      },
    ],
  },
  {
    date: '2024.01.15',
    records: [
      {
        id: 13,
        type: '출금',
        amount: 10000,
        total_after: 20000,
        time: '09:30:00',
      },
      {
        id: 14,
        type: '보상',
        amount: 8000,
        total_after: 28000,
        time: '14:00:00',
      },
    ],
  },
  {
    date: '2024.01.10',
    records: [
      {
        id: 15,
        type: '충전',
        amount: 40000,
        total_after: 90000,
        time: '11:00:00',
      },
    ],
  },
  {
    date: '2024.01.05',
    records: [
      {
        id: 16,
        type: '환불',
        amount: 6000,
        total_after: 24000,
        time: '10:00:00',
      },
    ],
  },
];

export const ToppedUpPoints: GroupedByDate[] = [
  {
    date: '2024.02.12',
    records: [
      {
        id: 5,
        type: '충전',
        amount: 15000,
        total_after: 35000,
        time: '11:20:00',
      },
    ],
  },
  {
    date: '2024.02.11',
    records: [
      {
        id: 4,
        type: '충전',
        amount: 20000,
        total_after: 50000,
        time: '16:45:00',
      },
    ],
  },
  {
    date: '2024.02.10',
    records: [
      {
        id: 3,
        type: '충전',
        amount: 30000,
        total_after: 70000,
        time: '09:00:00',
      },
    ],
  },
  {
    date: '2024.02.09',
    records: [
      {
        id: 2,
        type: '충전',
        amount: 10000,
        total_after: 40000,
        time: '14:15:00',
      },
    ],
  },
  {
    date: '2024.02.08',
    records: [
      {
        id: 1,
        type: '충전',
        amount: 50000,
        total_after: 50000,
        time: '10:30:00',
      },
    ],
  },
];

export const DeductedPoints: GroupedByDate[] = [
  {
    date: '2024.02.12',
    records: [
      {
        id: 5,
        type: '차감',
        amount: 15000,
        total_after: 35000,
        time: '11:20:00',
      },
    ],
  },
  {
    date: '2024.02.11',
    records: [
      {
        id: 4,
        type: '차감',
        amount: 20000,
        total_after: 50000,
        time: '16:45:00',
      },
    ],
  },
  {
    date: '2024.02.10',
    records: [
      {
        id: 3,
        type: '차감',
        amount: 30000,
        total_after: 70000,
        time: '09:00:00',
      },
    ],
  },
  {
    date: '2024.02.09',
    records: [
      {
        id: 2,
        type: '차감',
        amount: 10000,
        total_after: 40000,
        time: '14:15:00',
      },
    ],
  },
  {
    date: '2024.02.08',
    records: [
      {
        id: 1,
        type: '차감',
        amount: 50000,
        total_after: 50000,
        time: '10:30:00',
      },
    ],
  },
];

export const WithDrawnPoints: GroupedByDate[] = [
  {
    date: '2024.02.12',
    records: [
      {
        id: 5,
        type: '출금',
        amount: 15000,
        total_after: 35000,
        time: '11:20:00',
      },
    ],
  },
  {
    date: '2024.02.11',
    records: [
      {
        id: 4,
        type: '출금',
        amount: 20000,
        total_after: 50000,
        time: '16:45:00',
      },
    ],
  },
  {
    date: '2024.02.10',
    records: [
      {
        id: 3,
        type: '출금',
        amount: 30000,
        total_after: 70000,
        time: '09:00:00',
      },
    ],
  },
  {
    date: '2024.02.09',
    records: [
      {
        id: 2,
        type: '출금',
        amount: 10000,
        total_after: 40000,
        time: '14:15:00',
      },
    ],
  },
  {
    date: '2024.02.08',
    records: [
      {
        id: 1,
        type: '출금',
        amount: 50000,
        total_after: 50000,
        time: '10:30:00',
      },
    ],
  },
];
export const RewardPoints: GroupedByDate[] = [
  {
    date: '2024.02.12',
    records: [
      {
        id: 5,
        type: '보상',
        amount: 15000,
        total_after: 85000,
        time: '11:20:00',
      },
    ],
  },
  {
    date: '2024.02.11',
    records: [
      {
        id: 4,
        type: '보상',
        amount: 20000,
        total_after: 70000,
        time: '16:45:00',
      },
    ],
  },
  {
    date: '2024.02.10',
    records: [
      {
        id: 3,
        type: '보상',
        amount: 30000,
        total_after: 50000,
        time: '09:00:00',
      },
    ],
  },
  {
    date: '2024.02.09',
    records: [
      {
        id: 2,
        type: '보상',
        amount: 10000,
        total_after: 20000,
        time: '14:15:00',
      },
    ],
  },
  {
    date: '2024.02.08',
    records: [
      {
        id: 1,
        type: '보상',
        amount: 10000,
        total_after: 10000,
        time: '10:30:00',
      },
    ],
  },
];

export const RefundPoints: GroupedByDate[] = [
  {
    date: '2024.02.12',
    records: [
      {
        id: 5,
        type: '환불',
        amount: 15000,
        total_after: 20000,
        time: '11:20:00',
      },
    ],
  },
  {
    date: '2024.02.11',
    records: [
      {
        id: 4,
        type: '환불',
        amount: 20000,
        total_after: 35000,
        time: '16:45:00',
      },
    ],
  },
  {
    date: '2024.02.10',
    records: [
      {
        id: 3,
        type: '환불',
        amount: 30000,
        total_after: 55000,
        time: '09:00:00',
      },
    ],
  },
  {
    date: '2024.02.09',
    records: [
      {
        id: 2,
        type: '환불',
        amount: 10000,
        total_after: 85000,
        time: '14:15:00',
      },
    ],
  },
  {
    date: '2024.02.08',
    records: [
      {
        id: 1,
        type: '환불',
        amount: 50000,
        total_after: 95000,
        time: '10:30:00',
      },
    ],
  },
];

export const StudyDetailData: StudyDetail = {
  title: 'CPA 자격증 준비 스터디',
  description: 'CPA(공인회계사) 자격증 취득을 위한 이론 공부와 문제 풀이를 진행하는 스터디입니다.',
  tags: ['CPA', '회계', '재무관리', '회계학'],
};

export const TodoListData: TodoListType = {
  studyTotalTime: '27:51:12',
  todos: [
    {
      todoId: 10,
      todoName: 'JAVA 공부하기',
      isCompleted: true,
      totalStudyTime: '123:52:20',
    },
    {
      todoId: 12,
      todoName: '알고리즘 공부하기',
      isCompleted: false,
      totalStudyTime: '3:58:52',
    },
  ],
};
export const dummyStudyList: StudyOngoingType[] = [
  {
    roomId: 1,
    leaderId: 1,
    leaderNickname: '코딩마스터',
    title: '알고리즘 스터디',
    description: '매일 한 문제씩 풀며 알고리즘 실력을 키웁니다.',
    category: '코딩',
    tags: ['Python', 'Java', '코딩테스트'],
    goalTime: 90,
    deposit: 30000,
    studyStartAt: '2024-02-10T10:00:00Z',
    studyEndAt: '2024-05-10T20:00:00Z',
    currentMembers: 8,
    status: 'ACTIVE',
    hasNotice: false,
  },
  {
    roomId: 2,
    leaderId: 102,
    leaderNickname: '디자이너김',
    title: 'UI/UX 디자인 스터디',
    description: '매주 트렌드를 분석하고 피드백을 주고받는 디자인 스터디입니다.',
    category: '취업',
    tags: ['Figma', 'UX', 'UI'],
    goalTime: 60,
    deposit: 20000,
    studyStartAt: '2024-03-01T14:00:00Z',
    studyEndAt: '2024-06-01T17:00:00Z',
    currentMembers: 6,
    status: 'ACTIVE',
    hasNotice: true,
  },
];
export const dummyNotices: { [studyId: number]: NoticeType } = {
  2: {
    noticeId: 1,
    content: '이번 주는 팀 프로젝트 발표가 있습니다. 발표 준비를 철저히 해 주세요.',
    created: '2025-02-05T12:00:00',
  },
};
