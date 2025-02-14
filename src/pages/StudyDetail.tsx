import React from 'react';
import HeaderWithBack from '../components/HeaderWithBack';
import useStudyMain from '../hooks/study-detail/useStudyMain';
import TodoListSection from '../components/study-detail/TodoListSection';
import StudyMenuList from '../components/study-detail/StudyMenuList';
import Notice from '../components/study-detail/Notice';

function StudyDetail() {
  const { studyDetail, isDetailLoading, studyId, action, isMenuOpen, userId, toggleMenu } = useStudyMain();
  if (!studyDetail || isDetailLoading) return null;

  const { title, leaderId, hasNotice } = studyDetail;
  const isLeader = leaderId === userId;

  return (
    <div className="relative">
      <HeaderWithBack title={title} isStudyPage action={action} />
      <div>
        <Notice studyId={studyId} hasNotice={hasNotice} />
        <div className="bg-main mt-[302px] h-1.5 w-full" />
        <TodoListSection studyId={studyId} />
      </div>
      <StudyMenuList
        isMenuOpen={isMenuOpen}
        isLeader={isLeader}
        studyId={studyId}
        hasNotice={hasNotice}
        toggleMenu={toggleMenu}
      />
    </div>
  );
}

export default React.memo(StudyDetail);
