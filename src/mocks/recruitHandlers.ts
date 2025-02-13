import { http, HttpResponse } from 'msw';
import { mockStudyRoomList } from './data/dummy';
import { StudyRoomPostType, StudyRoomPutType } from '../types/interface';

const recruitHandlers = [
  // 모집 중인 스터디룸 목록 조회
  http.get(`/api/recruits`, ({ request }) => {
    console.log('스터디 모집 목록 조회');
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

  // 스터디 모집 글 생성
  http.post(`/api/recruits`, async ({ request }) => {
    const body = (await request.json()) as StudyRoomPostType;

    console.log('스터디 생성', body);

    return HttpResponse.json({
      status: 'OK',
      code: 200,
      message: '스터디가 생성되었습니다.',
      result: {
        ...body,
        recruitId: mockStudyRoomList.length + 1,
      },
    });
  }),

  // 스터디 모집 글 상세 조회
  http.get(`/api/recruits/:recruitId`, ({ params }) => {
    const recruitId = params.recruitId;
    const studyRoom = mockStudyRoomList.find((room) => room.recruitId === Number(recruitId));
    console.log('스터디 모집 글 상세 조회', studyRoom);
    return HttpResponse.json({
      status: 'OK',
      code: 200,
      message: '스터디 모집 글 상세 조회 생성되었습니다.',
      result: {
        ...studyRoom,
      },
    });
  }),

  // 스터디 모집 글 삭제
  http.delete(`/api/recruits/:recruitId`, ({ params }) => {
    const recruitId = params.recruitId;
    const index = mockStudyRoomList.findIndex((room) => room.recruitId === Number(recruitId));
    if (index !== -1) {
      mockStudyRoomList.splice(index, 1);

      return HttpResponse.json({
        status: 'OK',
        code: 200,
        message: '스터디 모집 글이 삭제되었습니다.',
      });
    }
  }),

  // 스터디 모집 글 수정
  http.put(`/api/recruits/:recruitId`, async ({ request, params }) => {
    const body = (await request.json()) as StudyRoomPutType;
    const recruitId = params.recruitId;
    const index = mockStudyRoomList.findIndex((room) => room.recruitId === Number(recruitId));

    mockStudyRoomList[index] = {
      ...mockStudyRoomList[index],
      ...body,
    };

    console.log('스터디 모집 글 수정', body);

    return HttpResponse.json({
      status: 'OK',
      code: 200,
      message: '글을 수정했습니다.',
    });
  }),
];

export default recruitHandlers;
