import { useState } from 'react';
import RangeSlider from '../components/RangeSlider';
import HeaderWithBack from '../components/HeaderWithBack';

export default function Search() {
  const [studyTimeRange, setStudyTimeRange] = useState([0, 0]);
  const action = { icon: undefined, ariaLabel: '검색창', onClick: () => {} };
  const categories: string[] = ['공무원', '대학 입시', '시험', '어학', '입용', '취업', '코딩', '기타'];

  const onClickSearchBtn = () => {};

  return (
    <>
      <HeaderWithBack title={'Search'} action={action} isStudyPage />
      <div className="px-4">
        <div className="mt-5 relative">
          <input placeholder="검색어를 입력하세요." className="search-input" />
        </div>

        <div className="mt-3">
          <h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold">주당 공부 시간</h2>
          <div className="flex items-center gap-2 mt-2 text-[16px] md:text-[18px]">
            <span>매주</span>
            <div className="flex gap-2">
              <input
                type="number"
                className="input w-12 text-center border-b border-black"
                value={studyTimeRange[0]}
                onChange={(e) => setStudyTimeRange([Number(e.target.value), studyTimeRange[1]])}
              />
              ~
              <input
                type="number"
                className="input w-12 text-center border-b border-black"
                value={studyTimeRange[1]}
                onChange={(e) => setStudyTimeRange([studyTimeRange[0], Number(e.target.value)])}
              />
              <span>시간</span>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold">카테고리</h2>
          <div className="grid grid-cols-4 gap-2 mt-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  onClick={(e) => console.log('카테고리 ', e.target.value)}
                />
                <span className="text-[12px] sm:text-[16px] md:text-[18px]">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <h2 className="text-[18px] font-bold">참여 포인트</h2>
          <div className="mt-4">
            <RangeSlider min={1000} max={50000} priceGap={1000} />
          </div>
        </div>

        <div className="mt-8">
          <button
            className="w-full h-[48px] bg-sub hover:bg-sub-hover text-main rounded-[40px]"
            onClick={onClickSearchBtn}
          >
            검색하기
          </button>
        </div>
      </div>
    </>
  );
}
