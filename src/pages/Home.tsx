import { Link } from 'react-router-dom';
import { useSearchStore } from '../store/useSearchStore';
import { useAuthStore } from '../store/useAuthStore';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import useGetList from '../hooks/home/useGetList';
import { pageType } from '../types/interface';
import FilterTags from '../components/home/FilterTags';
import RecruitList from '../components/home/RecruitList';
import OngoingList from '../components/home/OngoingList';
import emptyImg from '../assets/imgs/empty-study-list.png';

export default function Home({ type = 'recruits' }: { type: pageType }): JSX.Element {
  const { filteringInfo } = useSearchStore();
  const { id } = useAuthStore();
  const { lists, isLoading, fetchNextPage, hasNextPage } = useGetList(type);

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (!lists || isLoading) return <>Loading</>;

  return (
    <div className="px-4">
      <div style={{ height: `calc(100vh - 150px)` }}>
        <Link to={'/search'}>
          <input
            className="search-input cursor-pointer"
            type="text"
            placeholder="검색어를 입력하세요."
            value={filteringInfo.search}
            readOnly
          />
        </Link>
        <FilterTags filteringInfo={filteringInfo} type={type} />
        <div
          className="scrollbar-hide mt-3 flex w-full flex-col items-center gap-[5px] overflow-y-scroll"
          style={{ height: `${id === -1 ? 'calc(100vh - 200px)' : 'calc(100vh - 250px)'}`, minHeight: '400px' }}
        >
          {lists.length === 0 ? (
            <>
              <p className="mb-5 text-center">아직 등록된 글이 없어요.</p>
              <img src={emptyImg} alt={`빈 제목`} className="h-auto w-[76px]" />
            </>
          ) : (
            lists.map((list, index) => {
              const isLastItem = index === lists.length - 1;
              return type === 'recruits' ? (
                <RecruitList key={index} info={list} ref={isLastItem ? setTarget : null} />
              ) : (
                <OngoingList key={index} info={list} ref={isLastItem ? setTarget : null} />
              );
            })
          )}
        </div>
      </div>
      {id !== -1 && type === 'recruits' && (
        <Link
          to={'/create-study'}
          className="bg-main flex h-[30px] items-center justify-center rounded-[10px] text-center text-white"
        >
          <span className="text-sm">+ 스터디 만들기</span>
        </Link>
      )}
    </div>
  );
}
