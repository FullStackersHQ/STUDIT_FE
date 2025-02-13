import React from 'react';
import HeaderWithBack from '../components/HeaderWithBack';
import useStudyDefault from '../hooks/study-main/useStudyDefault';
import TodoListSection from '../components/study-main/TodoListSection';

function StudyMain() {
  const { title, studyId } = useStudyDefault();
  return (
    <div className="relative">
      <HeaderWithBack title={title} />
      <div>
        <div className="bg-main h-1.5 w-full" />
        <TodoListSection studyId={studyId} />
      </div>
    </div>
  );
}
export default React.memo(StudyMain);
