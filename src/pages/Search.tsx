import { useState } from 'react';

export default function Search() {
  const [studyTimeRange, setStudyTimeRange] = useState([0, 0]);
  const [pointsRange, setPointsRange] = useState([1000, 50000]);
  const categories = ['코딩', '공무원', '대학 입시', '어학', '취업', '입용', '시험', '기타'];

  return (
    <div className="p-4 bg-white min-h-screen">
      <div className="mt-4 relative">
        <input placeholder="검색어를 입력하세요." className="w-full border-gray-300" />
        <div className="absolute right-4 top-2 text-gray-500">🔍</div>
      </div>

      <div className="mt-6">
        <h2 className="text-sm font-semibold">주당 공부 시간</h2>
        <div className="flex items-center gap-2 mt-2">
          <span>매주</span>
          <div className="flex gap-2">
            <input
              type="number"
              className="w-16 text-center border-gray-300"
              value={studyTimeRange[0]}
              onChange={(e) => setStudyTimeRange([Number(e.target.value), studyTimeRange[1]])}
            />
            ~
            <input
              type="number"
              className="w-16 text-center border-gray-300"
              value={studyTimeRange[1]}
              onChange={(e) => setStudyTimeRange([studyTimeRange[0], Number(e.target.value)])}
            />
            <span>시간</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-sm font-semibold">카테고리</h2>
        <div className="grid grid-cols-4 gap-2 mt-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-1">
              <input type="radio" name="category" value={category} />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-sm font-semibold">참여 포인트</h2>
        <div className="mt-4">
          <input type="range" min={1000} max={50000} step={1000} className="w-full" />
          <div className="flex justify-between text-sm mt-2">
            <span>{pointsRange[0].toLocaleString()}</span>
            <span>{pointsRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button className="w-full bg-sub text-black rounded-xl py-3">검색하기</button>
      </div>
    </div>
  );
}
