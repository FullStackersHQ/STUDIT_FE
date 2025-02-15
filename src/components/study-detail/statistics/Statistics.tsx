import { useState } from 'react';
import UserGraph from './UserGraph';

export default function Statistics() {
  const [type, setType] = useState<'유저' | '그룹'>('유저');

  return (
    <>
      <>
        <button onClick={() => setType('유저')}>유저</button>
        <button onClick={() => setType('그룹')}>그룹</button>
      </>
      <div className="scrollbar-hide h-[calc(100vh-130px)] overflow-auto p-4">{type === '유저' && <UserGraph />}</div>
    </>
  );
}
