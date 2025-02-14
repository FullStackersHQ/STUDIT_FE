import client from '../utils/client';

const pointApi = {
  getUserPoints: async () => {
    const { data: response } = await client.get('/point');
    return response;
  },
  getAllPoints: async () => {
    const { data: response } = await client.get('/point/all');
    return response;
  },
  getToppedUpPoints: async () => {
    const { data: response } = await client.get('/point/topup');
    return response;
  },
  getDeductedPoints: async () => {
    const { data: response } = await client.get('/point/deduct');
    return response;
  },
  getWithdrawnPoints: async () => {
    const { data: response } = await client.get('/point/withdraw');
    return response;
  },
  getRewardPoints: async () => {
    const { data: response } = await client.get('/point/reward');
    return response;
  },
  getRefundPoints: async () => {
    const { data: response } = await client.get('/point/refund');
    return response;
  },
  withdrawPoint: async (withdrawPoint: number) => {
    const { data: response } = await client.post('/point/withdraw', { amount: withdrawPoint });
    return response;
  },
};
export default pointApi;
