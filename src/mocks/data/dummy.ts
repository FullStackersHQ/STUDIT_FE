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
export const upcomingStudies: UpcomingStudyItem[] = [
  {
    recruit_id: 1,
    gatherDate: '2025.03.01 ~ 2025.08.01',
    title: '9급 공무원 준비',
    enterPoint: 3000,
    tag: '공무원시험',
    weeklyStudyTime: 10,
  },
  {
    recruit_id: 2,
    gatherDate: '2025.04.10 ~ 2025.09.10',
    title: '토익 900 목표반',
    enterPoint: 2500,
    tag: '어학',
    weeklyStudyTime: 8,
  },
  {
    recruit_id: 3,
    gatherDate: '2025.05.15 ~ 2025.11.15',
    title: '회계 자격증반',
    enterPoint: 2000,
    tag: '자격증',
    weeklyStudyTime: 8,
  },
  {
    recruit_id: 4,
    gatherDate: '2025.06.01 ~ 2025.12.01',
    title: '한국사 1급 도전',
    enterPoint: 1500,
    tag: '한국사',
    weeklyStudyTime: 6,
  },
  {
    recruit_id: 5,
    gatherDate: '2025.07.01 ~ 2025.12.31',
    title: '공인중개사 대비',
    enterPoint: 1800,
    tag: '공인중개사',
    weeklyStudyTime: 7,
  },
  {
    recruit_id: 6,
    gatherDate: '2025.08.01 ~ 2026.02.01',
    title: '컴활 1급 단기완성',
    enterPoint: 2200,
    tag: '자격증',
    weeklyStudyTime: 9,
  },
  {
    recruit_id: 7,
    gatherDate: '2025.09.15 ~ 2026.03.15',
    title: 'JLPT N1 스터디',
    enterPoint: 1700,
    tag: '어학',
    weeklyStudyTime: 6,
  },
  {
    recruit_id: 8,
    gatherDate: '2025.10.10 ~ 2026.04.10',
    title: '행정법 기출 분석',
    enterPoint: 2000,
    tag: '공무원시험',
    weeklyStudyTime: 8,
  },
  {
    recruit_id: 9,
    gatherDate: '2025.11.05 ~ 2026.05.05',
    title: '독서 & 글쓰기',
    enterPoint: 2500,
    tag: '자기계발',
    weeklyStudyTime: 10,
  },
  {
    recruit_id: 10,
    gatherDate: '2025.12.01 ~ 2026.06.01',
    title: '경제학 기본개념',
    enterPoint: 3000,
    tag: '경제학',
    weeklyStudyTime: 5,
  },
  {
    recruit_id: 11,
    gatherDate: '2026.01.15 ~ 2026.07.15',
    title: '한국어능력시험',
    enterPoint: 1800,
    tag: '어학',
    weeklyStudyTime: 7,
  },
  {
    recruit_id: 12,
    gatherDate: '2026.02.20 ~ 2026.08.20',
    title: '법원직 시험 준비',
    enterPoint: 2200,
    tag: '공무원시험',
    weeklyStudyTime: 9,
  },
  {
    recruit_id: 13,
    gatherDate: '2026.03.10 ~ 2026.09.10',
    title: '독일어 B2 목표',
    enterPoint: 2600,
    tag: '어학',
    weeklyStudyTime: 11,
  },
  {
    recruit_id: 14,
    gatherDate: '2026.04.05 ~ 2026.10.05',
    title: '사회복지사 1급',
    enterPoint: 1900,
    tag: '자격증',
    weeklyStudyTime: 8,
  },
  {
    recruit_id: 15,
    gatherDate: '2026.05.01 ~ 2026.11.01',
    title: '공기업 NCS 대비',
    enterPoint: 1300,
    tag: '공기업',
    weeklyStudyTime: 4,
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
  {
    registerId: 3,
    gatherDate: '2024.09.15 ~ 2025.03.15',
    title: '공무원 행정법',
    enterPoint: 4000,
    tag: '공무원시험',
    weeklyStudyTime: 10,
  },
  {
    registerId: 4,
    gatherDate: '2024.12.01 ~ 2025.06.01',
    title: '토익 스피킹반',
    enterPoint: 3500,
    tag: '어학',
    weeklyStudyTime: 8,
  },
  {
    registerId: 5,
    gatherDate: '2024.08.20 ~ 2025.02.20',
    title: '데이터 분석 스터디',
    enterPoint: 4500,
    tag: '데이터분석',
    weeklyStudyTime: 9,
  },
];

export const completedStudies: CompletedStudyItem[] = [
  {
    studyId: 1,
    deductedPoint: 100,
    obtainedPoint: 200,
    gatherDate: '2024.12.15 ~ 2025.01.15',
    title: 'C++ 프로그래밍',
    enterPoint: 5000,
    tag: 'C++',
    weeklyStudyTime: 8,
  },
  {
    studyId: 2,
    deductedPoint: 50,
    obtainedPoint: 1500,
    gatherDate: '2024.11.10 ~ 2024.12.10',
    title: '웹 개발 프로젝트',
    enterPoint: 3000,
    tag: '웹 개발',
    weeklyStudyTime: 10,
  },
  {
    studyId: 3,
    deductedPoint: 2000,
    obtainedPoint: 350,
    gatherDate: '2024.10.05 ~ 2024.11.05',
    title: 'Java 알고리즘',
    enterPoint: 4000,
    tag: 'Java',
    weeklyStudyTime: 12,
  },
  {
    studyId: 4,
    deductedPoint: 120,
    obtainedPoint: 300,
    gatherDate: '2024.09.20 ~ 2024.10.20',
    title: '공무원 행정법',
    enterPoint: 2500,
    tag: '공무원시험',
    weeklyStudyTime: 9,
  },
  {
    studyId: 5,
    deductedPoint: 90,
    obtainedPoint: 220,
    gatherDate: '2024.08.15 ~ 2024.09.15',
    title: '토익 완성반',
    enterPoint: 3200,
    tag: '어학',
    weeklyStudyTime: 7,
  },
  {
    studyId: 6,
    deductedPoint: 250,
    obtainedPoint: 500,
    gatherDate: '2024.07.10 ~ 2024.08.10',
    title: '데이터 분석 스터디',
    enterPoint: 4500,
    tag: '데이터분석',
    weeklyStudyTime: 10,
  },
  {
    studyId: 7,
    deductedPoint: 300,
    obtainedPoint: 600,
    gatherDate: '2024.06.05 ~ 2024.07.05',
    title: 'Python 입문',
    enterPoint: 4000,
    tag: 'Python',
    weeklyStudyTime: 8,
  },
  {
    studyId: 8,
    deductedPoint: 400,
    obtainedPoint: 800,
    gatherDate: '2024.05.01 ~ 2024.06.01',
    title: '면접 대비반',
    enterPoint: 3800,
    tag: '취업',
    weeklyStudyTime: 6,
  },
  {
    studyId: 9,
    deductedPoint: 150,
    obtainedPoint: 320,
    gatherDate: '2024.04.10 ~ 2024.05.10',
    title: '컴퓨터 네트워크',
    enterPoint: 4200,
    tag: '네트워크',
    weeklyStudyTime: 9,
  },
  {
    studyId: 10,
    deductedPoint: 180,
    obtainedPoint: 370,
    gatherDate: '2024.03.05 ~ 2024.04.05',
    title: '시사 토론반',
    enterPoint: 2800,
    tag: '토론',
    weeklyStudyTime: 7,
  },
  {
    studyId: 11,
    deductedPoint: 60,
    obtainedPoint: 150,
    gatherDate: '2024.02.01 ~ 2024.03.01',
    title: '공인중개사 대비',
    enterPoint: 3500,
    tag: '공인중개사',
    weeklyStudyTime: 10,
  },
  {
    studyId: 12,
    deductedPoint: 220,
    obtainedPoint: 400,
    gatherDate: '2024.01.10 ~ 2024.02.10',
    title: '기초 통계학',
    enterPoint: 3900,
    tag: '통계',
    weeklyStudyTime: 8,
  },
  {
    studyId: 13,
    deductedPoint: 80,
    obtainedPoint: 180,
    gatherDate: '2023.12.05 ~ 2024.01.05',
    title: '독서 토론 스터디',
    enterPoint: 2600,
    tag: '독서',
    weeklyStudyTime: 6,
  },
  {
    studyId: 14,
    deductedPoint: 90,
    obtainedPoint: 200,
    gatherDate: '2023.11.01 ~ 2023.12.01',
    title: '일본어 초급반',
    enterPoint: 3300,
    tag: '어학',
    weeklyStudyTime: 7,
  },
  {
    studyId: 15,
    deductedPoint: 250,
    obtainedPoint: 500,
    gatherDate: '2023.10.10 ~ 2023.11.10',
    title: 'SQL 마스터 과정',
    enterPoint: 4100,
    tag: '데이터베이스',
    weeklyStudyTime: 10,
  },
  {
    studyId: 16,
    deductedPoint: 200,
    obtainedPoint: 400,
    gatherDate: '2023.09.05 ~ 2023.10.05',
    title: 'AI 기초 스터디',
    enterPoint: 4300,
    tag: '인공지능',
    weeklyStudyTime: 9,
  },
  {
    studyId: 17,
    deductedPoint: 140,
    obtainedPoint: 300,
    gatherDate: '2023.08.01 ~ 2023.09.01',
    title: '주식 투자 스터디',
    enterPoint: 3700,
    tag: '금융',
    weeklyStudyTime: 8,
  },
  {
    studyId: 18,
    deductedPoint: 120,
    obtainedPoint: 250,
    gatherDate: '2023.07.10 ~ 2023.08.10',
    title: '여행 영어 회화',
    enterPoint: 2900,
    tag: '어학',
    weeklyStudyTime: 6,
  },
  {
    studyId: 19,
    deductedPoint: 300,
    obtainedPoint: 600,
    gatherDate: '2023.06.05 ~ 2023.07.05',
    title: '공기업 NCS 대비',
    enterPoint: 4500,
    tag: '취업',
    weeklyStudyTime: 10,
  },
  {
    studyId: 20,
    deductedPoint: 110,
    obtainedPoint: 240,
    gatherDate: '2023.05.01 ~ 2023.06.01',
    title: 'GRE 수학 스터디',
    enterPoint: 3500,
    tag: 'GRE',
    weeklyStudyTime: 7,
  },
  {
    studyId: 21,
    deductedPoint: 130,
    obtainedPoint: 280,
    gatherDate: '2023.04.10 ~ 2023.05.10',
    title: '국제정치학 스터디',
    enterPoint: 3400,
    tag: '정치',
    weeklyStudyTime: 8,
  },
];
export const profileData: UserProfile = {
  userId: 1,
  nickName: '지식 헌터',
  points: 2000,
  applied: upcomingStudies.length,
  in_progress: ongoingStudies.length,
  completed: completedStudies.length,
  profileImage: 'https://placehold.co/48x48',
};

export const avgStatsData: AvgStats = {
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

export const userPoints: IUserPoints = {
  totalPoints: 50000,
  totalRewardPoints: 70000,
  totalDeductedPoints: 15000,
  totalWithdrawnPoints: 5000,
};

export const allPointRecords: GroupedByDate[] = [
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

export const toppedUpPoints: GroupedByDate[] = [
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

export const deductedPoints: GroupedByDate[] = [
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

export const withDrawnPoints: GroupedByDate[] = [
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
export const rewardPoints: GroupedByDate[] = [
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

export const refundPoints: GroupedByDate[] = [
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

export const studyDetailData: StudyDetail = {
  title: 'CPA 자격증 준비 스터디',
  description: 'CPA(공인회계사) 자격증 취득을 위한 이론 공부와 문제 풀이를 진행하는 스터디입니다.',
  tags: ['CPA', '회계', '재무관리', '회계학'],
};

export const todoListData: TodoListType = {
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
