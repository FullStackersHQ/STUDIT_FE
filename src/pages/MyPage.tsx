import React from 'react';
import ProfileSection from '../components/my-page/ProfileSection';
import useMyPage from '../hooks/my-page/useMyPage';
import AverageStats from '../components/my-page/AverageStats';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const { userData, isUserDataLoading, averageStats, isAvgLoading, userId } = useMyPage();
  const navigate = useNavigate();
  if (!userData || isUserDataLoading || !averageStats || isAvgLoading) return null;

  return (
    <div className="flex h-[calc(100%-60px)] flex-col overflow-y-hidden px-4 pt-2 pb-7">
      <div>
        <ProfileSection userData={userData} userId={userId} />
        <AverageStats averageStats={averageStats} nickName={userData.nickName} />
      </div>
      <Button text="포인트 출금하고 내역을 볼 수 있어요" onClick={() => navigate('/point')} extraClass="mt-4" />
    </div>
  );
}

export default React.memo(MyPage);
