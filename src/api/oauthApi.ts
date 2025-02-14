import client from '../utils/client';

const oauthApi = {
  postOauthCode: async (code: string | null) => {
    const { data: response } = await client.post(`/api/kakao-login?code=${code}`);
    return response;
  },
  getUserLoginInfo: async () => {
    const { data: response } = await client.get('/api/auth/kakao-login');
    return response;
  },
  logout: async () => {
    await client.get('/api/auth/kakao-logout');
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
