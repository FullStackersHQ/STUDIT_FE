import React from 'react';
import HeaderWithBack from '../components/HeaderWithBack';
import StudyItem from '../components/my-page/StudyItem';
import useMyStudyList from '../hooks/my-page/useMyStudyList';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import emptyImg from '../assets/imgs/empty-study-list.png';
import { StudyItemType } from '../types/interface';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import banner from '../assets/imgs/banner.png';
import ChevronRight from '../assets/icons/chevron-right.svg';
import ScrollToTopBtn from '../components/ScrollToTopBtn';

function MyStudyList() {
  const { studyType, title, studyList, isLoading, fetchNextPage, hasNextPage, emptyText } = useMyStudyList();
  const { setTarget } = useIntersectionObserver({ hasNextPage, fetchNextPage });
  const navigate = useNavigate();

  if (!studyList || isLoading) return null;

  return (
    <div className={`${!studyList && 'flex h-full w-full items-center justify-between'}`}>
      <HeaderWithBack title={title} />
      <section className="flex w-full flex-col gap-y-2 px-4 pt-3 pb-5">
        {studyList ? (
          <div>
            <div className="flex flex-col gap-y-2">
              {studyList.map((studyItem: StudyItemType, index: number) => {
                const isLastItem = index === studyList.length - 1;
                return (
                  <StudyItem study={studyItem} studyType={studyType} key={index} ref={isLastItem ? setTarget : null} />
                );
              })}
            </div>
            <button
              aria-label="스터디 목록으로 이동"
              onClick={() => navigate('/')}
              className="bg-light-gray mt-6 flex w-full justify-between rounded px-4 py-2 text-white"
            >
              <div className="flex flex-col justify-between py-2">
                <p className="text-left text-2xl font-bold">입금해라 공부할 것이다</p>
                <div className="flex items-center">
                  <span className="text-sm"> 스터디 목록 보러가기 </span>
                  <ChevronRight alt="스터디 목록 화살표" className="h-auto w-5" />
                </div>
              </div>
              <img src={banner} alt="배너" className="h-auto w-[54px]" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <p className="mb-5 text-center">
              아직 {emptyText}가 없어요.
              <br />
              함께할 스터디를 찾아볼까요?
            </p>
            <img src={emptyImg} alt={`빈 ${title}`} className="h-auto w-[76px]" />
            <Button text="스터디 보러가기" onClick={() => navigate('/')} extraClass="mt-20" />
          </div>
        )}
      </section>
      <ScrollToTopBtn hasBanner />
    </div>
  );
}
export default React.memo(MyStudyList);
