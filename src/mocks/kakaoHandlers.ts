import { http, HttpResponse } from 'msw';

const kakaoHandler = [
  http.post('/api/kakao-login', async ({ request }) => {
    const code = new URL(request.url).searchParams.get('code');
    console.log('kakao 인가 코드 전송');

    if (code) {
      return HttpResponse.json({
        status: 200,
        data: {
          id: 1,
          connected_at: '2025-02-07T06:32:23Z',
          properties: {
            nickname: 'seungmani',
            profile_image: 'https://via.placeholder.com/150',
            jwt_token: 'token123',
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
      id: 21123443898,
      connected_at: '2025-02-07T06:32:23Z',
      properties: {
        nickname: '임현주',
        profile_image: 'https://img1.kakao.jpeg',
        jwt_token: 'token123',
      },
    });
  }),

  http.get('/api/auth/kakao-logout', () => {
    console.log('로그아웃');
  }),

  http.get('/api/auth/login', () => {
    console.log('로그인');
    return HttpResponse.json({
      id: 21123443898,
      connected_at: '2025-02-07T06:32:23Z',
      properties: {
        nickname: '임현주',
        profile_image: 'https://img1.kakao.jpeg',
        jwt_token: 'sa6g54sa65g46a',
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
