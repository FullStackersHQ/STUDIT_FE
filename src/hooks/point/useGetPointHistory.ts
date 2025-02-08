import { useQuery } from '@tanstack/react-query';
import pointApi from '../../api/pointApi';
import { PointFilterType, GroupedByDate } from '../../types/interface';
import { useMemo } from 'react';

export default function useGetPointHistory(selectedFilter: PointFilterType) {
  const apiFunction: Record<PointFilterType, () => Promise<GroupedByDate>> = {
    전체: pointApi.getAllPoints,
    충전: pointApi.getToppedUpPoints,
    차감: pointApi.getDeductedPoints,
    출금: pointApi.getWithdrawnPoints,
  };

  const { data, isLoading } = useQuery<GroupedByDate>({
    queryKey: [selectedFilter],
    queryFn: apiFunction[selectedFilter],
  });

  const pointHistory = useMemo(() => {
    if (!data) return [];
    const listMapping: Record<PointFilterType, GroupedByDate> = {
      전체: data,
      충전: data,
      차감: data,
      출금: data,
    };
    return listMapping[selectedFilter] || {};
  }, [data, selectedFilter]);
  return { pointHistory, isLoading };
}
