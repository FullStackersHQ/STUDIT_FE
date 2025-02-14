import RangeSlider from '../components/search/RangeSlider';
import HeaderWithBack from '../components/HeaderWithBack';
import { useSearchStore } from '../store/useSearchStore';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import WeekStudyTime from '../components/search/WeekStudyTime';
import Category from '../components/search/Category';

export default function Search() {
  const action = { icon: undefined, ariaLabel: '', onClick: () => {} };
  const { filteringInfo, setFilteringInfo } = useSearchStore();
  const navigate = useNavigate();

  const onClickSearchBtn = () => {
    // 검색 api 연동
    console.log(filteringInfo);
    navigate('/');
  };

  return (
    <>
      <HeaderWithBack title={'Search'} action={action} isStudyPage={false} />
      <div className="px-4">
        <div className="relative mt-5">
          <input
            placeholder="검색어를 입력하세요."
            className="search-input"
            value={filteringInfo.search}
            onChange={(e) => setFilteringInfo({ ...filteringInfo, search: e.target.value })}
          />
        </div>

        <div className="mt-3">
          <WeekStudyTime />
        </div>

        <div className="mt-5">
          <Category />
        </div>

        <div className="mt-5">
          <h2 className="text-[18px] font-bold">참여 포인트</h2>
          <div className="mt-4">
            <RangeSlider min={1000} max={50000} priceGap={1000} />
          </div>
        </div>

        <div className="mt-8">
          <Button text={'검색하기'} onClick={onClickSearchBtn} ariaLabel={'검색하기 버튼'} />
        </div>
      </div>
    </>
  );
}
