import React from 'react';
import HeaderWithBack from '../components/HeaderWithBack';
import StudyItem from '../components/my-page/StudyItem';
import useMyStudyList from '../hooks/my-page/useMyStudyList';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function MyStudyList() {
  const { studyType, title, studyList, isLoading, fetchNextPage, hasNextPage } = useMyStudyList();
  const { setTarget } = useIntersectionObserver({ hasNextPage, fetchNextPage });
  if (!studyList || isLoading) return null;

  return (
    <div>
      <HeaderWithBack title={title} />
      <section className="flex flex-col gap-y-2 px-4 pt-3 pb-7">
        {studyList.map((studyItem, index) => {
          const isLastItem = index === studyList.length - 1;
          return <StudyItem study={studyItem} studyType={studyType} key={index} ref={isLastItem ? setTarget : null} />;
        })}
      </section>
    </div>
  );
}
export default React.memo(MyStudyList);
