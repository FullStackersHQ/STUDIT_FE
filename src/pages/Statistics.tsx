import { useState } from 'react';
import UserGraph from '../components/study-detail/statistics/UserGraph';
import GroupGraph from '../components/study-detail/statistics/GroupGraph';
import HeaderWithBack from '../components/HeaderWithBack';

export default function Statistics() {
  const [type, setType] = useState<'유저' | '그룹'>('유저');

  return (
    <>
      <HeaderWithBack title="스터디 통계" isStudyPage />
      <div className="px-4 py-2">
        <button
          className={`rounded-[10px] px-[8px] py-[3px] ${type === '유저' ? 'bg-main-text font-bold text-white' : 'border-light-gray text-light-gray border bg-white'} mr-2`}
          onClick={() => setType('유저')}
        >
          유저
        </button>
        <button
          className={`rounded-[10px] px-[8px] py-[3px] ${type === '그룹' ? 'bg-main-text font-bold text-white' : 'border-light-gray text-light-gray border bg-white'} `}
          onClick={() => setType('그룹')}
        >
          그룹
        </button>
      </div>
      <div className="scrollbar-hide h-[calc(100vh-140px)] overflow-auto p-4">
        {type === '유저' && <UserGraph />}
        {type === '그룹' && <GroupGraph />}
      </div>
    </>
  );
}
