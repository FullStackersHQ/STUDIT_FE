import React from 'react';
import HeaderWithBack from '../components/HeaderWithBack';
import useStudyMain from '../hooks/study-detail/useStudyMain';
import StudyMenuList from '../components/study-detail/main/StudyMenuList';
import Notice from '../components/study-detail/main/Notice';
import Timers from '../components/study-detail/main/Timers';
import TodoListSection from '../components/study-detail/main/TodoListSection';
import useTimers from '../hooks/study-detail/useTimers';

function StudyDetail() {
  const { studyDetail, isDetailLoading, studyId, action, isMenuOpen, userId, toggleMenu } = useStudyMain();
  const { timers, setTimers, isTimerLoading } = useTimers(studyId);
  if (!studyDetail || isDetailLoading || isTimerLoading) return null;

  const { title, leaderId, hasNotice } = studyDetail;
  const isLeader = leaderId === userId;

  return (
    <div>
      <HeaderWithBack title={title} isStudyPage action={action} />
      <StudyMenuList
        isMenuOpen={isMenuOpen}
        isLeader={isLeader}
        studyId={studyId}
        hasNotice={hasNotice}
        toggleMenu={toggleMenu}
      />
      <Notice studyId={studyId} hasNotice={hasNotice} />
      <Timers timers={timers} leaderId={leaderId} userId={userId} hasNotice={hasNotice} />
      <div className="bg-main my-3 h-1.5 w-full" />
      <TodoListSection studyId={studyId} setTimers={setTimers} userId={userId} />
    </div>
  );
}

export default React.memo(StudyDetail);
