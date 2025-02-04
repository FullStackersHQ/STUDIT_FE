import { useInfiniteQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import axios from 'axios';
import { useSearchStore } from '../store/searchStore';

const fetchStudies = async (pageParam = 1) => {
  const { data } = await axios.get(`/api/study-room?page=${pageParam}`);
  return data.result.study_rooms;
};

export default function Home(): JSX.Element {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['study-rooms'],
    queryFn: ({ pageParam = 1 }) => fetchStudies(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined;
    },
  });
  const { filteringInfo, setFilteringInfo } = useSearchStore();

  const getInitialValue = (key: string) => {
    switch (key) {
      case 'category':
      case 'search':
        return ''; // 문자열인 경우 빈 값으로 초기화
      case 'studyTimeRange':
      case 'point':
        return [0, 0]; // 배열인 경우 [0, 0]으로 초기화
      default:
    }
  };

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

  console.log(data?.pages);

  return (
    <div className="h-[100vh] px-4">
      <Link to={'/search'}>
        <input className="search-input" type="text" placeholder="검색어를 입력하세요." />
      </Link>

      <div className="w-full h-[24px] mb-3 flex items-center gap-[5px] overflow-y-auto scrollbar-hide">
        {Object.entries(filteringInfo).map(([key, value], index) => (
          <div
            key={index}
            className="px-[8px] py-[3px] rounded-[10px] text-sm bg-white-gray shrink-0 whitespace-nowrap min-w-max"
            onClick={() => setFilteringInfo({ ...filteringInfo, [key]: getInitialValue(key) })}
          >
            {key === 'studyTimeRange' || key === 'point' ? `# ${value[0]} ~ ${value[1]} X` : `# ${value} X`}
          </div>
        ))}
      </div>

      {/* 스터디 목록 */}
      <div className="w-full h-[400px] mt-3 flex flex-col items-center gap-[5px] overflow-y-scroll scrollbar-hide">
        {data?.pages
          .flatMap((page) => page)
          .map((study) => (
            <div key={study.recruitId} className="w-full bg-white p-3 rounded-[10px] border border-white-gray">
              <div className="mb-2">
                <p className="font-bold">{study.title}</p>
                <p className="text-sm text-gray">
                  스터디원 ({study.current_members} / {study.max_members})명
                </p>
              </div>
              <div className="text-sm text-gray">
                <p>
                  스터디 기간: {study.study_start_at.split('T')[0]} ~ {study.study_end_at.split('T')[0]}
                </p>
                <p>모집 기간 ~{study.recruit_end_date.split('T')[0]}</p>
                <p>카테고리: {study.category}</p>
                <p>{study.status}</p>
              </div>
              <div className="flex gap-2 mt-2">
                {study.tags.map((tag: string) => (
                  <p key={tag} className="text-xs bg-white-gray px-2 py-1 rounded-md">
                    #{tag}
                  </p>
                ))}
              </div>
            </div>
          ))}
        <div ref={observerRef} className="h-10" />
      </div>

      {/* 생성하기 버튼 - 로그인 시 보여줌 없으면 공백*/}
      <Link
        to={'/create-study'}
        className="h-[30px] sm:h-[40px] md:h-[50px] flex items-center justify-center px-3 py-1 bg-main text-white text-center rounded-[10px]"
      >
        <span className="text-sm">+ 스터디 만들기</span>
      </Link>
    </div>
  );
}
