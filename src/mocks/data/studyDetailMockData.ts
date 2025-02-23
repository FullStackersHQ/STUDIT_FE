import { StudyDetail, TodoListType, StudyOngoingType, NoticeType, TimerType } from '../../types/interface';

export const studyDetailData: StudyDetail = {
  title: 'CPA 자격증 준비 스터디',
  description: 'CPA(공인회계사) 자격증 취득을 위한 이론 공부와 문제 풀이를 진행하는 스터디입니다.',
  tags: ['CPA', '회계', '재무관리', '회계학'],
};

export const todoListData: { [studyId: number]: TodoListType } = {
  1: {
    studyTotalTime: 12000,
    todos: [
      {
        todoId: 10,
        todoName: 'JAVA 공부하기',
        isCompleted: true,
        studyTime: 7200,
        isRunning: false,
      },
      {
        todoId: 12,
        todoName: '알고리즘 공부하기',
        isCompleted: false,
        studyTime: 4800,
        isRunning: false,
      },
    ],
  },
  2: {
    studyTotalTime: 8000,
    todos: [
      {
        todoId: 13,
        todoName: 'React 공부하기',
        isCompleted: true,
        studyTime: 5000,
        isRunning: false,
      },
      {
        todoId: 14,
        todoName: 'TypeScript 공부하기',
        isCompleted: false,
        studyTime: 3000,
        isRunning: false,
      },
    ],
  },
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
    studyStartAt: '2024-02-10T10',
    studyEndAt: '2024-05-10T20',
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
    studyStartAt: '2024-03-01T14',
    studyEndAt: '2024-06-01T17',
    currentMembers: 6,
    status: 'ACTIVE',
    hasNotice: true,
  },
];

export const dummyNotices: { [studyId: number]: NoticeType } = {
  2: {
    noticeId: 2,
    content: '이번 주는 팀 프로젝트 발표가 있습니다. 발표 준비를 철저히 해 주세요.',
    created: '2025-02-05T12:00:00',
  },
};

export const timersData: { [studyId: number]: TimerType[] } = {
  1: [
    {
      userId: 1,
      nickname: '지식 헌터',
      timerTime: 12000,
      isRunning: false,
    },
    {
      userId: 2,
      nickname: '지식의 기사',
      timerTime: 1800,
      isRunning: true,
    },
    {
      userId: 3,
      nickname: '책속지식인',
      timerTime: 356,
      isRunning: true,
    },
    {
      userId: 4,
      nickname: '공부 마스터',
      timerTime: 0,
      isRunning: false,
    },
  ],
};
