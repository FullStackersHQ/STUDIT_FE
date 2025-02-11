import { StudyRoomPutType, StudyRoomPostType } from '../types/interface';
import client from '../utils/client';

export const recruitApi = {
  postRecruitInfo: async (info: StudyRoomPostType) => {
    const { data: response } = await client.post(
      `/api/recruits`,
      {
        ...info,
      },
      { headers: { 'Content-Type': 'application/json' } },
    );
    return response;
  },
  getRecruitInfo: async (recruitId: number) => {
    const { data: response } = await client.get(`/api/recruits/${recruitId}`);
    return response;
  },
  updateRecruitInfo: async (recruitId: number, info: StudyRoomPutType) => {
    const { data: response } = await client.put(`/api/recruits/${recruitId}`, {
      ...info,
    });
    return response;
  },
  deleteRecruitInfo: async (recruitId: number) => {
    const { data: response } = await client.delete(`/api/recruits/${recruitId}`);
    return response;
  },
  joinRecruit: async (recruitId: number, info: { deposit: number }) => {
    const { data: response } = await client.post(`/api/recruits/${recruitId}/registers`, {
      deposit: info.deposit,
    });
    return response;
  },
};
