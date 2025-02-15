import { useInfiniteQuery, QueryFunctionContext } from '@tanstack/react-query';
import pointApi from '../../api/pointApi';
import { PointFilterType, GroupedByDate } from '../../types/interface';
import { useMemo } from 'react';

type PaginatedDataResponse = {
  data: GroupedByDate[];
  hasNextPage: boolean;
};

export default function useGetPointHistory(selectedFilter: PointFilterType) {
  const apiFunction: Record<PointFilterType, (pageParam: number) => Promise<PaginatedDataResponse>> = {
    전체: pointApi.getAllPoints,
    충전: pointApi.getToppedUpPoints,
    차감: pointApi.getDeductedPoints,
    출금: pointApi.getWithdrawnPoints,
    보상: pointApi.getRewardPoints,
    환불: pointApi.getRefundPoints,
  };

  const { data, isLoading, fetchNextPage, hasNextPage, refetch } = useInfiniteQuery<PaginatedDataResponse, Error>({
    queryKey: [selectedFilter],
    queryFn: ({ pageParam = 1 }: QueryFunctionContext) => apiFunction[selectedFilter](pageParam as number),
    getNextPageParam: (lastPage: PaginatedDataResponse, allPages: PaginatedDataResponse[]) => {
      if (lastPage.hasNextPage) {
        return allPages.length + 1;
      }
      return undefined;
    },
    initialPageParam: 1,
  });

  const pointHistory = useMemo(() => {
    if (!data) return [];
    return data.pages.flatMap((page) => page.data);
  }, [data]);

  return { pointHistory, isLoading, refetch, fetchNextPage, hasNextPage };
}
