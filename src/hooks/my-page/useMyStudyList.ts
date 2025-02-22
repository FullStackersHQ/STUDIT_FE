import { useLocation } from 'react-router-dom';
import { StudyStatusType } from '../../types/interface';
import useFetchMyStudyList from './useFetchMyStudyList';

export default function useMyStudyList() {
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
  const emptyText =
    studyType === 'upcoming'
      ? '시작 전인 스터디'
      : studyType === 'ongoing'
        ? '진행 중인 스터디'
        : studyType === 'completed'
          ? '완료한 스터디'
          : '';
  const { studyList, isLoading, fetchNextPage, hasNextPage } = useFetchMyStudyList(studyType);

  return { studyType, title, studyList, isLoading, fetchNextPage, hasNextPage, emptyText };
}
