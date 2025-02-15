import { useState } from 'react';
import UserGraph from './UserGraph';
import GroupGraph from './GroupGraph';

export default function Statistics() {
  const [type, setType] = useState<'유저' | '그룹'>('유저');

  return (
    <>
      <div className="px-4 pt-2">
        <button
          className={`rounded-[10px] px-[8px] py-[3px] ${type === '유저' ? 'bg-main-text font-bold text-white' : 'border bg-white'} mr-2`}
          onClick={() => setType('유저')}
        >
          유저
        </button>
        <button
          className={`rounded-[10px] px-[8px] py-[3px] ${type === '그룹' ? 'bg-main-text font-bold text-white' : 'border bg-white'} `}
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
