import React from 'react';
import Logo from '../assets/logo.png';
import Bell from '@/assets/icons/bell.svg';
import HomeIcon from '@/assets/icons/home.svg';
import { Link } from 'react-router-dom';

const Home = React.memo((): JSX.Element => {
  return (
    <div className="h-[100vh]">
      <div className="w-full px-4">
        {/* Header */}
        <div className="w-[343px] h-[50px] flex items-center justify-between">
          <img src={Logo} alt="Logo" className="w-[83px] h-[33px]" />
          <Bell />
        </div>

        {/* 검색 창 */}
        <Link to={'#'}>
          <input
            className="w-[343px] h-[23px] mb-3 border rounded-[10px] border-main text-black text-sm placeholder:pl-2"
            type="text"
            placeholder="검색어를 입력하세요."
          />
        </Link>

        {/* 필터 */}
        <div className="w-[343px] h-[24px] mb-3 flex items-center gap-[5px] overflow-y-auto scrollbar-hide">
          <div className="px-[8px] py-[3px] rounded-[10px] text-sm bg-white-gray flex-shrink-0 whitespace-nowrap min-w-max">
            # 코딩 x
          </div>
          <div className="px-[8px] py-[5px] rounded-[10px] text-sm bg-white-gray flex-shrink-0 whitespace-nowrap min-w-max">
            # 10 ~ 40시간 x
          </div>
          <div className="px-[8px] py-[5px] rounded-[10px] text-sm bg-white-gray flex-shrink-0 whitespace-nowrap min-w-max">
            # 10 ~ 40시간 x
          </div>
          <div className="px-[8px] py-[5px] rounded-[10px] text-sm bg-white-gray flex-shrink-0 whitespace-nowrap min-w-max">
            # 10 ~ 40시간 x
          </div>
          <div className="px-[8px] py-[5px] rounded-[10px] text-sm bg-white-gray flex-shrink-0 whitespace-nowrap min-w-max">
            # 10 ~ 40시간 x
          </div>
          <div className="px-[8px] py-[5px] rounded-[10px] text-sm bg-white-gray flex-shrink-0 whitespace-nowrap min-w-max">
            # 10 ~ 40시간 x
          </div>
        </div>

        {/* 생성하기 버튼 - 로그인 시 보여줌 없으면 공백*/}
        <Link
          to={'/study/create'}
          className=" h-[30px] mb-3 float-right px-3 py-1 bg-main text-white text-center rounded-[10px]"
        >
          <span className="text-sm">+ 스터디 만들기</span>
        </Link>

        {/* 스터디 목록 */}
        <div className="w-[343px] h-[400px] mb-3 flex flex-col items-center gap-[5px] overflow-y-scroll scrollbar-hide">
          {/* 없으면 -> 등록된 스터디가 없습니다. */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="w-full bg-white p-3 rounded-[10px] border border-white-gray">
              <div className="mb-2">
                <p className="font-bold">스터디 제목</p>
                <p className="text-sm text-gray">스터디원 10명</p>
              </div>
              <div className="text-sm text-gray">
                <p>스터디 기간: 2025-01-01 ~ 2025-02-01 (4주)</p>
                <p>주당 목표 시간: 40시간</p>
                <p>참여 포인트: 500</p>
              </div>
              <div className="flex gap-2 mt-2">
                <p className="text-xs bg-white-gray px-2 py-1 rounded-md"># 태그</p>
                <p className="text-xs bg-white-gray px-2 py-1 rounded-md"># 태그</p>
                <p className="text-xs bg-white-gray px-2 py-1 rounded-md"># 태그</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* nav */}
      <div className="w-full h-[55px] fixed bottom-0 left-0 flex items-center justify-around bg-white">
        <Link to={'/'} className="flex flex-col items-center justify-center text-main">
          <HomeIcon />
          <p>홈</p>
        </Link>
        <Link to={'/'} className="flex flex-col items-center justify-center text-center text-gray">
          <HomeIcon />
          <p>그룹</p>
        </Link>
        <Link to={'/'} className="flex flex-col items-center justify-center text-center text-gray">
          <HomeIcon />
          <p>마이</p>
        </Link>
      </div>
    </div>
  );
});

export default Home;
