import React from 'react';
import PointFilterList from '../components/point/PointFilterList';
import { PointFilterType } from '../types/interface';
import HeaderWithBack from '../components/HeaderWithBack';
import PointCheck from '../components/point/PointCheck';
import PointHistory from '../components/point/PointHistory';
import { useState } from 'react';
import ScrollToTopBtn from '../components/ScrollToTopBtn';

function Point() {
  const [selectedFilter, setSelectedFilter] = useState<PointFilterType>('전체');
  return (
    <div className="mt-3.5 mb-7 bg-white">
      <HeaderWithBack title="포인트 출금 및 내역" />
      <div className="relative px-4">
        <PointCheck />
        <div className="bg-main absolute top-[132px] right-0 left-0 h-1.5 w-full" />
        <section className="flex flex-col pt-[26px] pb-5">
          <PointFilterList selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
          <PointHistory selectedFilter={selectedFilter} />
        </section>
      </div>
      <ScrollToTopBtn />
    </div>
  );
}

export default React.memo(Point);
