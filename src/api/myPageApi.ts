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
  modifyProfileImg: async (img: string) => {
    const formData = new FormData();
    formData.append('image', img);
    const { data: response } = await client.put(`/user/profile-image/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  },
  modifyNickName: async (nickName: string) => {
    const { data: response } = await client.put(
      `/user/nickname/`,
      { nickName: nickName },
      { headers: { 'Content-Type': 'application/json' } },
    );
    return response;
  },
  getUpcomingList: async () => {
    const { data: response } = await client.get(`/study-status/registered/`);
    return response;
  },
  getOngoingList: async () => {
    const { data: response } = await client.get(`/study-status/ongoing/`);
    return response;
  },
  getCompletedList: async () => {
    const { data: response } = await client.get(`/study-status/completed/`);
    return response;
  },
};
export default myPageApi;
