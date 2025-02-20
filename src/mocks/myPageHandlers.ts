import { http, HttpResponse } from 'msw';
import { profileData, avgStatsData, upcomingStudies, ongoingStudies, completedStudies } from './data/userMockData';

interface ModifyNicknameRequest {
  nickName: string;
}

const myPageHandlers = [
  http.get('/mypage/study-status/1', () => {
    if (profileData) return HttpResponse.json(profileData);
    return HttpResponse.error();
  }),
  http.get('/mypage/study-stats/1', () => {
    if (avgStatsData) return HttpResponse.json(avgStatsData);
    return HttpResponse.error();
  }),
  http.put('/user/profile-image/', async ({ request }) => {
    const formData = await request.formData();
    const img = formData.get('image') as string;
    profileData.profileImage = img;

    return HttpResponse.json({
      success: true,
      message: '프로필 사진이 성공적으로 수정되었습니다.',
      img: img,
    });
  }),
  http.put('/user/nickname/', async ({ request }) => {
    const { nickName } = (await request.json()) as ModifyNicknameRequest;
    profileData.nickName = nickName;

    return HttpResponse.json({
      success: true,
      message: '닉네임이 성공적으로 수정되었습니다.',
      nickname: nickName,
    });
  }),
  http.get('/study-status/registered/', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    const paginatedData = upcomingStudies.slice(startIndex, startIndex + pageSize);
    const hasNextPage = upcomingStudies.length > startIndex + pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage,
    });
  }),
  http.get('/study-status/ongoing/', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    const paginatedData = ongoingStudies.slice(startIndex, startIndex + pageSize);
    const hasNextPage = ongoingStudies.length > startIndex + pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage: hasNextPage,
    });
  }),
  http.get('/study-status/completed/', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page') || 1);
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    const paginatedData = completedStudies.slice(startIndex, startIndex + pageSize);
    const hasNextPage = completedStudies.length > startIndex + pageSize;

    return HttpResponse.json({
      data: paginatedData,
      hasNextPage: hasNextPage,
    });
  }),
];
export default myPageHandlers;
