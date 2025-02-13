import { useParams } from 'react-router-dom';
import useGetStudyDetail from './useGetStudyDetail';

export default function useStudyDefault() {
  const params = useParams();
  const studyId = Number(params.studyId);
  const { studyDetail } = useGetStudyDetail(studyId);
  const title = studyDetail?.title;

  return { title, studyId };
}
