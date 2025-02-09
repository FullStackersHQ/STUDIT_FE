import { Link } from 'react-router-dom';
import { useSearchStore } from '../store/searchStore';
import FilterList from '../components/home/FilterList';
import StudyRoom from '../components/home/StudyRoom';

export default function Home(): JSX.Element {
  const { filteringInfo } = useSearchStore();
  const isLogin = true;

  return (
    <div className="px-4">
      <div style={{ height: `calc(100vh - 52px - 48px - 50px)` }}>
        <Link to={'/search'}>
          <input
            className="search-input"
            type="text"
            placeholder="검색어를 입력하세요."
            value={filteringInfo.search}
            readOnly
          />
        </Link>
        <FilterList />
        <StudyRoom />
      </div>
      <Link
        to={isLogin ? '/create-study' : '/login'}
        className="bg-main flex h-[30px] items-center justify-center rounded-[10px] text-center text-white"
      >
        <span className="text-sm">{isLogin ? '+ 스터디 만들기' : '로그인'}</span>
      </Link>
    </div>
  );
}
