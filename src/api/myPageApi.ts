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
  getUpcomingList: async (pageParam: number) => {
    const { data: response } = await client.get(`/study-status/registered/`, {
      params: { page: pageParam },
    });
    return {
      data: response.data,
      hasNextPage: response.hasNextPage,
    };
  },
  getOngoingList: async (pageParam: number) => {
    const { data: response } = await client.get(`/study-status/ongoing/`, {
      params: { page: pageParam },
    });
    return {
      data: response.data,
      hasNextPage: response.hasNextPage,
    };
  },
  getCompletedList: async (pageParam: number) => {
    const { data: response } = await client.get(`/study-status/completed/`, {
      params: { page: pageParam },
    });
    return {
      data: response.data,
      hasNextPage: response.hasNextPage,
    };
  },
};
export default myPageApi;
