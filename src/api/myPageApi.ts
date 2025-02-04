import client from '../utils/client';

const myPageApi = {
  getProfile: async (userId: number) => {
    const { data: response } = await client.get(`/mypage/study-status/${userId}`);
    return response;
  },
  getAvgStats: async (userId: number) => {
    const { data: response } = await client.get(`/mypage/study-stats/${userId}`);
    return response;
  },
};
export default myPageApi;
