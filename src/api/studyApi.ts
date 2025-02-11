import { StudyDetail } from '../types/interface';
import client from '../utils/client';

const studyApi = {
  getStudyDetail: async (studyId: number) => {
    const { data: response } = await client.get(`/rooms/${studyId}`);
    return response;
  },
  updateStudyDetail: async (studyId: number, editInfo: StudyDetail) => {
    const { data: response } = await client.put(`/rooms/${studyId}`, {
      title: editInfo.title,
      description: editInfo.description,
      tags: editInfo.tags,
    });
    return response;
  },
};
export default studyApi;
