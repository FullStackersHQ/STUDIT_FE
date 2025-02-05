import { Link } from 'react-router-dom';
import { useSearchStore } from '../store/searchStore';
import FilterList from '../components/home/FilterList';
import StudyRoom from '../components/home/StudyRoom';

export default function Home(): JSX.Element {
  const { filteringInfo } = useSearchStore();
  const isLogin = true;

  return (
      <div className="h-[100vh-70px] px-4">
        <Link to={'/search'}>
          <input className="search-input" type="text" placeholder="검색어를 입력하세요." value={filteringInfo.search} readOnly/>
        </Link>
        <FilterList />
        <StudyRoom />
        <Link
          to={isLogin ? '/create-study' : "/login"}
          className="h-[30px] sm:h-[40px] md:h-[50px] flex items-center justify-center bg-main text-white text-center rounded-[10px]"
        >
          <span className="text-sm">{isLogin ? '+ 스터디 만들기' : '로그인'}</span>
        </Link>
      </div>
  );
}
