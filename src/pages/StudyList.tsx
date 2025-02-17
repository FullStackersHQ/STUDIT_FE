import { Link } from 'react-router-dom';
import { useSearchStore } from '../store/useSearchStore';
import FilterList from '../components/recruitList/FilterList';
import StudyRoomList from '../components/Study-list/StudyRoomList';

export default function StudyList(): JSX.Element {
  const { filteringInfo } = useSearchStore();

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
        <StudyRoomList />
      </div>
    </div>
  );
}
