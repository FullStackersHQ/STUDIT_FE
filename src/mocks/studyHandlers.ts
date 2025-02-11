import { http, HttpResponse } from 'msw';
import { StudyDetailData } from './data/dummy';
import { UpdateStudyRequest } from '../types/request';

const studyHandlers = [
  http.get(`/rooms/1`, () => {
    if (StudyDetailData) return HttpResponse.json(StudyDetailData);
    return HttpResponse.error();
  }),
  http.put(`/rooms/1`, async ({ request }) => {
    try {
      const body = (await request.json()) as UpdateStudyRequest;
      const { title, tags, description } = body;
      if (!body) {
        return new HttpResponse(JSON.stringify({ message: '잘못된 요청 본문이거나 body가 없습니다.' }), {
          status: 400,
        });
      }
      StudyDetailData.description = description;
      StudyDetailData.tags = tags;
      StudyDetailData.title = title;
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
];
export default studyHandlers;
