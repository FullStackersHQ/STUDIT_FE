import { useInfiniteQuery } from '@tanstack/react-query';
import client from '../../utils/client';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const fetchStudies = async (pageParam = 1) => {
  const { data } = await client.get(`/api/recruits?page=${pageParam}`);
  return data.result.recruits;
};

export default function StudyRecruitList(): JSX.Element {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['study-recruit-list'],
    queryFn: ({ pageParam = 1 }) => fetchStudies(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
  });
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 },
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div
      className="scrollbar-hide mt-3 flex w-full flex-col items-center gap-[5px] overflow-y-scroll"
      style={{ height: `calc(100vh - 250px)` }}
    >
      {data?.pages
        .flatMap((page) => page)
        .map((study) => (
          <Link
            key={study.recruitId}
            to={`/study-recruit/${study.recruitId}`}
            className="border-white-gray w-full rounded-[10px] border bg-white p-3"
          >
            <div className="mb-2">
              <p className="font-bold">{study.title + ' (' + study.category + ')'}</p>
              <p className="text-gray text-sm">
                스터디원 ( {study.currentMembers} / {study.maxMembers} ) 명
              </p>
            </div>
            <div className="text-gray text-sm">
              <p>
                스터디 기간: {study.studyStartAt.split('T')[0]} ~ {study.studyEndAt.split('T')[0]}
              </p>
              <p>모집 기간 ~{study.recruitEndAt.split('T')[0]}</p>
              <p>모집중</p>
            </div>
            <div className="mt-2 flex gap-2">
              {study.tags.map((tag: string) => (
                <p key={tag} className="bg-white-gray rounded-md px-2 py-1 text-xs">
                  #{tag}
                </p>
              ))}
            </div>
          </Link>
        ))}
      <div ref={observerRef} className="h-10" />
    </div>
  );
}
