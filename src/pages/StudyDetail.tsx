import React, { useState } from 'react';
import HeaderWithBack from '../components/HeaderWithBack';
import useStudyMain from '../hooks/study-detail/useStudyMain';
import Study from './Study';
import StudyMenuList from '../components/study-detail/StudyMenuList';
import StudyFnb from '../components/StudyFnb';
import Statistics from '../components/study-detail/statistics/Statistics';

function StudyDetail() {
  const [nav, setNav] = useState<string>('스터디');
  const { studyDetail, isDetailLoading, studyId, action, isMenuOpen, userId, toggleMenu } = useStudyMain();
  if (!studyDetail || isDetailLoading) return null;

  const { title, leaderId, hasNotice } = studyDetail;
  const isLeader = leaderId === userId;

  return (
    <div className="relative h-screen">
      <HeaderWithBack title={title} isStudyPage action={action} />
      {nav === '스터디' ? <Study studyId={studyId} hasNotice={hasNotice} /> : nav === '통계' ? <Statistics /> : null}
      <StudyMenuList
        isMenuOpen={isMenuOpen}
        isLeader={isLeader}
        studyId={studyId}
        hasNotice={hasNotice}
        toggleMenu={toggleMenu}
      />
      <StudyFnb nav={nav} setNav={setNav} />
    </div>
  );
}

export default React.memo(StudyDetail);
