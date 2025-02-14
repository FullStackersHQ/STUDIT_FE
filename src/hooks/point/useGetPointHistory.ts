import { useQuery } from '@tanstack/react-query';
import pointApi from '../../api/pointApi';
import { PointFilterType, GroupedByDate } from '../../types/interface';
import { useMemo } from 'react';

export default function useGetPointHistory(selectedFilter: PointFilterType) {
  const apiFunction: Record<PointFilterType, () => Promise<GroupedByDate[]>> = {
    전체: pointApi.getAllPoints,
    충전: pointApi.getToppedUpPoints,
    차감: pointApi.getDeductedPoints,
    출금: pointApi.getWithdrawnPoints,
    보상: pointApi.getRewardPoints,
    환불: pointApi.getRefundPoints,
  };

  const { data, isLoading, refetch } = useQuery<GroupedByDate[]>({
    queryKey: [selectedFilter],
    queryFn: apiFunction[selectedFilter],
  });

  const pointHistory = useMemo(() => {
    if (!data) return [];
    return data;
  }, [data]);

  return { pointHistory, isLoading, refetch };
}
