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
      hasNextPage: response.hasNextPage,
    };
  },
  getToppedUpPoints: async (pageParam: number) => {
    const { data: response } = await client.get('/point/topup', { params: { page: pageParam } });
    return {
      data: response.data,
      hasNextPage: response.hasNextPage,
    };
  },
  getDeductedPoints: async (pageParam: number) => {
    const { data: response } = await client.get('/point/deduct', { params: { page: pageParam } });
    return {
      data: response.data,
      hasNextPage: response.hasNextPage,
    };
  },
  getWithdrawnPoints: async (pageParam: number) => {
    const { data: response } = await client.get('/point/withdraw', { params: { page: pageParam } });
    return {
      data: response.data,
      hasNextPage: response.hasNextPage,
    };
  },
  getRewardPoints: async (pageParam: number) => {
    const { data: response } = await client.get('/point/reward', { params: { page: pageParam } });
    return {
      data: response.data,
      hasNextPage: response.hasNextPage,
    };
  },
  getRefundPoints: async (pageParam: number) => {
    const { data: response } = await client.get('/point/refund', { params: { page: pageParam } });
    return {
      data: response.data,
      hasNextPage: response.hasNextPage,
    };
  },
  withdrawPoint: async (amount: number) => {
    const { data: response } = await client.post('/point/withdraw', { amount: amount });
    return response;
  },
  chargePoint: async (amount: number) => {
    const { data: response } = await client.post('/point/charge', { amount: amount });
    return response;
  },
};
export default pointApi;
