import { http, HttpResponse } from 'msw';
import { mockStudyRoomList } from './data/dummy';

export const studyRoomHandlers = [
  // 스터디룸 목록 조회
  http.get(`/api/recruits`, async ({ request }) => {
    console.log('스터디 목록 조회');
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = 5;
    const start = (page - 1) * limit;
    const end = start + limit;
    const hasNextPage = end < mockStudyRoomList.length;

    return HttpResponse.json({
      status: 'OK',
      code: 200,
      message: '스터디 목록이 조회 되었습니다.',
      result: {
        recruits: mockStudyRoomList.slice(start, end),
        nextPage: hasNextPage ? page + 1 : null,
      },
    });
  }),

  // 스터디 생성
  http.post(`/api/recruits`, async ({ request }) => {
    console.log('스터디 생성');
    const body = await request.json();

    console.log('스터디 생성 요청', body);
    mockStudyRoomList.push({
      recruitId: mockStudyRoomList.length + 1,
      ...body,
    });

    return HttpResponse.json({
      status: 'OK',
      code: 200,
      message: '스터디가 생성되었습니다.',
      result: {
        recruitId: mockStudyRoomList.length + 1,
        ...body,
      },
    });
  }),
];
