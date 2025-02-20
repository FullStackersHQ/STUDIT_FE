import { useQuery } from '@tanstack/react-query';
import { recruitApi } from '../../api/recruitApi';

export default function useGetRecruitInfo(recruitId: number) {
  const { data: recruitInfo, isLoading } = useQuery({
    queryKey: ['getRecruitInfo', recruitId],
    queryFn: () => recruitApi.getRecruitInfo(recruitId),
  });
  console.log(recruitInfo);
  return { recruitInfo, isLoading };
}
