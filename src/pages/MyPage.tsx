import React from 'react';
import ProfileSection from '../components/my-page/ProfileSection';
import useMyPage from '../hooks/my-page/useMyPage';
import AverageStats from '../components/my-page/AverageStats';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const { userData, isUserDataLoading, averageStats, isAvgLoading } = useMyPage();
  const navigate = useNavigate();
  if (!userData || isUserDataLoading || !averageStats || isAvgLoading) return;

  return (
    <div className="flex h-[calc(100%-60px)] flex-col justify-between px-4 py-7">
      <div>
        <ProfileSection userData={userData} />
        <AverageStats averageStats={averageStats} nickName={userData.nickName} />
      </div>
      <Button text="포인트 출금하고 내역을 볼 수 있어요" onClick={() => navigate('/points')} />
    </div>
  );
}

export default React.memo(MyPage);
