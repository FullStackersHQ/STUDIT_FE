import client from '../utils/client';

const oauthApi = {
  postOauthCode: async (code: string | null) => {
    const { data: response } = await client.post(
      `/api/kakao-login?code=${code}`,
      {},
      {
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
    return response;
  },
  getUserLoginInfo: async () => {
    const { data: response } = await client.get('/api/auth/kakao-login');
    return response;
  },
  logout: async () => {
    const { data: response } = await client.get('/api/auth/kakao-logout');
    return response;
  },
  updateJWTToken: async (token: string, userId: string) => {
    const { data: response } = await client.post(`/api/auth/${userId}/refresh`, {
      refresh_token: token,
    });
    return response;
  },
  login: async () => {
    const { data: response } = await client.get('/api/auth/login');
    return response;
  },
};

export default oauthApi;
