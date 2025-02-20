import { http, HttpResponse } from 'msw';
import { dummyStudyList, dummyNotices } from './data/studyDetailMockData';
import { UpdateStudyRequest, NoticeRequest } from '../types/request';
import { mockStudyRoomList } from './data/studyListMockData';

const studyMainHandlers = [
  http.get(`/api/rooms`, ({ request }) => {
    console.log('스터디 목록 조회');
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 5;
    const startIndex = (page - 1) * pageSize;
    const paginatedData = mockStudyRoomList.slice(startIndex, startIndex + pageSize);
    const hasNextPage = mockStudyRoomList.length > startIndex + pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage,
    });
  }),
  http.get(`/rooms/:studyId`, ({ params }) => {
    const studyId = params.studyId;
    const targetStudy = dummyStudyList.find((dummyStudy) => dummyStudy.roomId === Number(studyId));
    if (dummyStudyList && targetStudy) return HttpResponse.json(targetStudy);
    return HttpResponse.error();
  }),
  http.put(`/rooms/:studyId`, async ({ params, request }) => {
    try {
      const studyId = params.studyId;
      const body = (await request.json()) as UpdateStudyRequest;
      const targetStudy = dummyStudyList.find((dummyStudy) => dummyStudy.roomId === Number(studyId));
      if (!body || !targetStudy) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }
      const { title, tags, description } = body;
      targetStudy.description = description;
      targetStudy.tags = tags;
      targetStudy.title = title;
      return new HttpResponse(
        JSON.stringify({
          message: '스터디가 수정되었습니다.',
        }),
        { status: 200 },
      );
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),

  http.get(`/rooms/:studyId/notices`, ({ params }) => {
    const studyId = params.studyId;
    const notice = dummyNotices[Number(studyId)];
    if (notice && studyId) return HttpResponse.json(notice);
    return HttpResponse.error();
  }),
  http.put('/rooms/:studyId/notices', async ({ params, request }) => {
    try {
      const studyId = Number(params.studyId);
      const body = (await request.json()) as NoticeRequest;
      const notice = dummyNotices[studyId];

      if (!body || !studyId || !notice) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }

      const { content } = body;
      notice.content = content;

      return new HttpResponse(
        JSON.stringify({
          message: '공지가 수정되었습니다.',
        }),
        { status: 200 },
      );
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),
  http.post('/rooms/:studyId/notices', async ({ params, request }) => {
    try {
      const studyId = Number(params.studyId);
      const body = (await request.json()) as NoticeRequest;
      const targetStudy = dummyStudyList.find((dummyStudy) => dummyStudy.roomId === studyId);
      const { content } = body;

      if (!body || !studyId || !targetStudy) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }
      const newNotice = {
        noticeId: studyId,
        content: content,
        created: '2025-02-06T12:00:00',
      };
      targetStudy.hasNotice = true;
      dummyNotices[studyId] = newNotice;

      return new HttpResponse(
        JSON.stringify({
          message: '공지가 등록되었습니다.',
        }),
        { status: 200 },
      );
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),
  http.delete('/rooms/:studyId/notices', async ({ params }) => {
    try {
      const studyId = Number(params.studyId);
      const notice = dummyNotices[studyId];
      const targetStudy = dummyStudyList.find((dummyStudy) => dummyStudy.roomId === studyId);

      if (!studyId || !notice || !targetStudy) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), {
          status: 400,
        });
      }

      delete dummyNotices[studyId];
      targetStudy.hasNotice = false;
      return new HttpResponse(
        JSON.stringify({
          message: '공지가 삭제되었습니다.',
        }),
        { status: 200 },
      );
    } catch {
      return new HttpResponse(JSON.stringify({ message: '잘못된 요청입니다.' }), { status: 400 });
    }
  }),
];
export default studyMainHandlers;
