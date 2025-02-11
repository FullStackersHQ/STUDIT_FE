import React from 'react';
import HeaderWithBack from '../components/HeaderWithBack';
import useStudyList from '../hooks/my-page/useStudyList';
import StudyItem from '../components/my-page/StudyItem';

function StudyList() {
  const { studyType, title, studyList, isLoading } = useStudyList();
  if (!studyList || isLoading) return null;

  return (
    <div>
      <HeaderWithBack title={title} />
      <section className="flex flex-col gap-y-2 px-4 pt-3 pb-7">
        {studyList.map((studyItem, index) => (
          <StudyItem study={studyItem} studyType={studyType} key={index} />
        ))}
      </section>
    </div>
  );
}
export default React.memo(StudyList);
