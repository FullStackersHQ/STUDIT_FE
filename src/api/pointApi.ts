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
};
export default pointApi;
