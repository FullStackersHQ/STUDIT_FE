export const mockStudyRoomList: {
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
}[] = [
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
    study_start_at: '2025-02-11T00:00:00',
    study_end_at: '2025-04-11T00:00:00',
    recruit_end_date: '2025-02-12T23:59:59',
    current_members: 2,
    max_members: 6,
    status: '모집중',
  },
];
