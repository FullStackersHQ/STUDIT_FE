import { http, HttpResponse } from 'msw';
import { StudyRoomPostType, StudyRoomPutType } from '../types/interface';
import { mockStudyRecruitList } from './data/studyList';
import { deductedPoints } from './data/dummy';

const recruitHandlers = [
  // 모집 중인 스터디룸 목록 조회
  http.get(`/api/recruits`, ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 5;
    const startIndex = (page - 1) * pageSize;
    const paginatedData = mockStudyRecruitList.slice(startIndex, startIndex + pageSize);
    const hasNextPage = mockStudyRecruitList.length > startIndex + pageSize;
    console.log('스터디 모집 목록 조회', page);
    return HttpResponse.json({
      data: paginatedData,
      hasNextPage,
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
        recruitId: mockStudyRecruitList.length + 1,
      },
    });
  }),

  // 스터디 모집 글 상세 조회
  http.get(`/api/recruits/:recruitId`, ({ params }) => {
    const recruitId = params.recruitId;
    const studyRoom = mockStudyRecruitList.find((room) => room.recruitId === Number(recruitId));
    console.log('스터디 모집 글 상세 조회', studyRoom);
    if (studyRoom) {
      return HttpResponse.json({
        status: 'OK',
        code: 200,
        message: '스터디 모집 글 상세 조회 생성되었습니다.',
        result: {
          ...studyRoom,
        },
      });
    } else {
      return HttpResponse.json({
        status: 'ERROR',
        code: 404,
        message: '해당하는 스터디 모집 글을 수 없습니다.',
      });
    }
  }),

  // 모집글 가입
  http.post(`/api/recruits/:recruitId/registers`, async ({ params, request }) => {
    const recruitId = params.recruitId;
    const index = mockStudyRecruitList.findIndex((recruit) => recruit.recruitId === Number(recruitId));
    const body = (await request.json()) as { deposit: number };
    console.log('스터디 모집 글 가입', body);

    if (index !== -1) {
      const now = new Date();
      const formattedDate = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
      const formattedTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;

      deductedPoints.unshift({
        date: formattedDate,
        records: [
          {
            id: 1,
            type: '차감',
            amount: body.deposit,
            total_after: 35000,
            time: formattedTime,
          },
        ],
      });
      console.log(deductedPoints);
      return HttpResponse.json({
        status: 'OK',
        code: 200,
        message: '가입하였습니다.',
      });
    }
  }),

  // 스터디 모집 글 삭제
  http.delete(`/api/recruits/:recruitId`, ({ params }) => {
    const recruitId = params.recruitId;
    const index = mockStudyRecruitList.findIndex((recruit) => recruit.recruitId === Number(recruitId));
    console.log('스터디 모집 글 삭제', index);

    if (index !== -1) {
      mockStudyRecruitList.splice(index, 1);

      return HttpResponse.json({
        status: 'OK',
        code: 200,
        message: '스터디 모집 글이 삭제되었습니다.',
      });
    } else {
      return HttpResponse.json({
        status: 'ERROR',
        code: 404,
        message: '해당하는 스터디 모집 글을 수 없습니다.',
      });
    }
  }),

  // 스터디 모집 글 수정
  http.put(`/api/recruits/:recruitId`, async ({ request, params }) => {
    const body = (await request.json()) as StudyRoomPutType;
    const recruitId = params.recruitId;
    const index = mockStudyRecruitList.findIndex((recruit) => recruit.recruitId === Number(recruitId));

    mockStudyRecruitList[index] = {
      ...mockStudyRecruitList[index],
      ...body,
    };

    console.log('스터디 모집 글 수정', body);

    if (index !== -1) {
      mockStudyRecruitList.splice(index, 1);

      return HttpResponse.json({
        status: 'OK',
        code: 200,
        message: '스터디 모집 글이 수정되었습니다.',
      });
    } else {
      return HttpResponse.json({
        status: 'ERROR',
        code: 404,
        message: '해당하는 스터디 모집 글을 수 없습니다.',
      });
    }
  }),
];

export default recruitHandlers;
