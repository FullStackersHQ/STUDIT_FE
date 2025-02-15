import client from '../utils/client';

const pointApi = {
  getUserPoints: async () => {
    const { data: response } = await client.get('/point');
    return response;
  },
  getAllPoints: async (pageParam: number) => {
    const { data: response } = await client.get('/point/all', { params: { page: pageParam } });
    return {
      data: response.data,
      hasNextPage: response.data.length === 10,
    };
  },
  getToppedUpPoints: async (pageParam: number) => {
    const { data: response } = await client.get('/point/topup', { params: { page: pageParam } });
    return {
      data: response.data,
      hasNextPage: response.data.length === 10,
    };
  },
  getDeductedPoints: async (pageParam: number) => {
    const { data: response } = await client.get('/point/deduct', { params: { page: pageParam } });
    return {
      data: response.data,
      hasNextPage: response.data.length === 10,
    };
  },
  getWithdrawnPoints: async (pageParam: number) => {
    const { data: response } = await client.get('/point/withdraw', { params: { page: pageParam } });
    return {
      data: response.data,
      hasNextPage: response.data.length === 10,
    };
  },
  getRewardPoints: async (pageParam: number) => {
    const { data: response } = await client.get('/point/reward', { params: { page: pageParam } });
    return {
      data: response.data,
      hasNextPage: response.data.length === 10,
    };
  },
  getRefundPoints: async (pageParam: number) => {
    const { data: response } = await client.get('/point/refund', { params: { page: pageParam } });
    return {
      data: response.data,
      hasNextPage: response.data.length === 10,
    };
  },
  withdrawPoint: async (withdrawPoint: number) => {
    const { data: response } = await client.post('/point/withdraw', { amount: withdrawPoint });
    return response;
  },
};
export default pointApi;
