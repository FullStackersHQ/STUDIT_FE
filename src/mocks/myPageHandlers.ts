import { http, HttpResponse } from 'msw';
import { ProfileData, AvgStatsData } from './data/dummy';

interface ModifyNicknameRequest {
  nickName: string;
}

const myPageHandlers = [
  http.get('/mypage/study-status/1', () => {
    if (ProfileData) return HttpResponse.json(ProfileData);
    return HttpResponse.error();
  }),
  http.get('/mypage/study-stats/1', () => {
    if (AvgStatsData) return HttpResponse.json(AvgStatsData);
    return HttpResponse.error();
  }),
  http.put('/user/profile-image/', async ({ request }) => {
    const formData = await request.formData();
    const img = formData.get('image');
    return HttpResponse.json({
      success: true,
      message: '프로필 사진이 성공적으로 수정되었습니다.',
      img: img,
    });
  }),
  http.put('/user/nickname/', async ({ request }) => {
    const { nickName } = (await request.json()) as ModifyNicknameRequest;
    return HttpResponse.json({
      success: true,
      message: '닉네임이 성공적으로 수정되었습니다.',
      nickname: nickName,
    });
  }),
];
export default myPageHandlers;
