import React, { useState } from 'react';
import HeaderWithBack from '../components/HeaderWithBack';
import useStudyMain from '../hooks/study-detail/useStudyMain';
import TodoListSection from '../components/study-detail/TodoListSection';
import StudyMenuList from '../components/study-detail/StudyMenuList';
import StudyFnb from '../components/StudyFnb';
import Statistics from '../components/study-detail/statistics/Statistics';

function StudyDetail() {
  const [nav, setNav] = useState<string>('스터디');
  const { studyDetail, isLoading, studyId, action, isMenuOpen, userId } = useStudyMain();
  if (!studyDetail || isLoading) return null;
  const { title, leaderId, hasNotice } = studyDetail;
  const isLeader = leaderId === userId;

  return (
    <div className="relative h-screen">
      <HeaderWithBack title={title} isStudyPage action={action} />
      {nav === '스터디' && (
        <>
          <div>
            <div className="bg-main mt-[302px] h-1.5 w-full" />
            <TodoListSection studyId={studyId} />
          </div>
          <StudyMenuList isMenuOpen={isMenuOpen} isLeader={isLeader} studyId={studyId} hasNotice={hasNotice} />
        </>
      )}
      {nav === '통계' && <Statistics />}
      <StudyFnb nav={nav} setNav={setNav} />
    </div>
  );
}

export default React.memo(StudyDetail);
