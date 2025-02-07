import { useLocation } from 'react-router-dom';
import useFetchStudyList from './useFetchStudyList';
import { StudyStatusType } from '../../types/interface';

export default function useStudyList() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const studyType: StudyStatusType = (queryParams.get('status') as StudyStatusType) || 'upcoming';
  const title =
    studyType === 'upcoming'
      ? '참여할 스터디 목록'
      : studyType === 'ongoing'
        ? '참여 중인 스터디 목록'
        : studyType === 'completed'
          ? '완료한 스터디 목록'
          : '';
  const { studyList, isLoading } = useFetchStudyList(studyType);
  return { studyType, title, studyList, isLoading };
}
