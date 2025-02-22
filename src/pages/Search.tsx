import RangeSlider from '../components/search/RangeSlider';
import HeaderWithBack from '../components/HeaderWithBack';
import { useSearchStore } from '../store/useSearchStore';
import { useNavigate } from 'react-router-dom';
import WeekStudyTime from '../components/search/WeekStudyTime';
import { CATEGORY } from '../constants/constants';
import { useCallback, useState } from 'react';
import Select from '../components/search/Select';

export default function Search() {
  const { filteringInfo, setFilteringInfo, clearFilteringInfo } = useSearchStore();
  const [search, setSearch] = useState<string>(filteringInfo.search);
  const [category, setCategory] = useState<string>(filteringInfo.category);
  const [studyTimeRange, setStudyTimeRange] = useState<[number, number]>(filteringInfo.studyTimeRange);
  const [point, setPoint] = useState<[number, number]>(filteringInfo.point);
  const navigate = useNavigate();

  const onClickSearchBtn = () => {
    setFilteringInfo({
      search,
      category,
      studyTimeRange,
      point,
    });
    navigate('/');
  };

  const resetFilteringInfo = useCallback(() => {
    clearFilteringInfo();
    setCategory('');
    setSearch('');
    setStudyTimeRange([0, 0]);
    setPoint([1000, 50000]);
  }, []);

  return (
    <>
      <HeaderWithBack title={'Search'} isStudyPage={false} />
      <div className="px-4">
        <div className="mt-3 flex items-center justify-between">
          <button
            className="text-main h-8 w-1/5 rounded-[10px] text-sm font-bold transition-colors"
            onClick={resetFilteringInfo}
            aria-label={'초기화 버튼'}
          >
            초기화
          </button>

          <button
            className="bg-main hover:bg-main-hover h-8 w-1/5 rounded-[10px] text-sm text-white transition-colors"
            onClick={onClickSearchBtn}
            aria-label={'검색하기 버튼'}
          >
            검색하기
          </button>
        </div>
        <div className="mt-5">
          <input
            placeholder="검색어를 입력하세요."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <h3 className="font-bold">주당 공부 시간</h3>
          <WeekStudyTime value={studyTimeRange} setValue={setStudyTimeRange} />
        </div>

        <div className="mt-8">
          <h2 className="font-bold">카테고리</h2>
          <Select categories={CATEGORY} value={category || CATEGORY[0]} setValue={setCategory} />
        </div>

        <div className="mt-8">
          <h2 className="font-bold">참여 포인트</h2>
          <div className="mt-1">
            <RangeSlider value={point} setValue={setPoint} min={1000} max={50000} priceGap={1000} />
          </div>
        </div>
      </div>
    </>
  );
}
