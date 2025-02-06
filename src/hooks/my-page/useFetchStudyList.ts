import { useQuery } from '@tanstack/react-query';
import { StudyStatusType, StudyItemType } from '../../types/interface';
import myPageApi from '../../api/myPageApi';
import { useMemo } from 'react';

export default function useFetchStudyList(studyType: StudyStatusType) {
  const apiFunctions: Record<StudyStatusType, () => Promise<StudyItemType[]>> = {
    upcoming: myPageApi.getUpcomingList,
    ongoing: myPageApi.getOngoingList,
    completed: myPageApi.getCompletedList,
  };

  const { data, refetch, isLoading } = useQuery<StudyItemType[]>({
    queryKey: [studyType],
    queryFn: apiFunctions[studyType],
  });

  const studyList = useMemo(() => {
    if (!data) return [];
    const listMapping: Record<StudyStatusType, StudyItemType[]> = {
      // api 구현될 시 수정 필요
      upcoming: data,
      ongoing: data,
      completed: data,
    };
    return listMapping[studyType] || [];
  }, [data, studyType]);

  return {
    studyList,
    refetch,
    isLoading,
  };
}
