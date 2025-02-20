import { http, HttpResponse } from 'msw';
import { profileData } from './data/userMockData';

const kakaoHandler = [
  http.post('/api/kakao-login', async ({ request }) => {
    const code = new URL(request.url).searchParams.get('code');
    console.log('kakao 인가 코드 전송');

    if (code) {
      return HttpResponse.json({
        status: 200,
        data: {
          id: profileData.userId,
          connected_at: '2025-02-07T06:32:23Z',
          properties: {
            nickname: profileData.nickName,
            profile_image: profileData.profileImage,
            jwt_token: 'token123',
            point: profileData.points,
          },
        },
      });
    } else {
      return new HttpResponse(
        JSON.stringify({
          message: 'kakao 로그인 실패',
        }),
        {
          status: 400,
        },
      );
    }
  }),

  http.get('/api/auth/kakao-login', () => {
    return HttpResponse.json({
      id: profileData.userId,
      connected_at: '2025-02-07T06:32:23Z',
      properties: {
        nickname: profileData.nickName,
        profile_image: profileData.profileImage,
        jwt_token: 'token123',
        point: profileData.points,
      },
    });
  }),

  http.get('/api/auth/kakao-logout', () => {
    console.log('로그아웃');
    return HttpResponse.json({ message: '로그아웃 성공', status: 200 });
  }),

  http.get('/api/auth/login', () => {
    console.log('로그인');
    return HttpResponse.json({
      id: profileData.userId,
      connected_at: '2025-02-07T06:32:23Z',
      properties: {
        nickname: profileData.nickName,
        profile_image: profileData.profileImage,
        jwt_token: 'token123',
        point: profileData.points,
      },
    });
  }),

  http.post('/api/auth/:userId/refresh', ({ request }) => {
    // refresh token 정보 출력
    console.log('토큰 갱신', request.json());
    return HttpResponse.json({
      jwt_token: 'new-refresh-token-string',
    });
  }),
];

export default kakaoHandler;
