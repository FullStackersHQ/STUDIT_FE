import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';
import { pageType, StudyDetailType } from '../../types/interface';
import client from '../../utils/client';
import { useMemo } from 'react';

interface ResponseType {
  data: StudyDetailType[];
  hasNextPage: boolean;
}

const fetchList = async (type: pageType, pageParam = 1) => {
  const { data } = await client.get(`/api/${type}`, {
    params: { page: pageParam },
  });
  return data;
};

export default function useGetList(type: pageType) {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [`${type}-list`],
    queryFn: ({ pageParam = 1 }: QueryFunctionContext) => fetchList(type, pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage: ResponseType, allPages: ResponseType[]) => {
      return lastPage.hasNextPage ? allPages.length + 1 : undefined;
    },
  });

  const lists = useMemo(() => {
    if (!data) return [];
    return data.pages.flatMap((page) => page.data);
  }, [data]);

  return {
    lists,
    isLoading,
    fetchNextPage,
    hasNextPage,
  };
}
