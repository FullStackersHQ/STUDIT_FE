import React, { useCallback } from 'react';
import { recruitApi } from '../../api/recruitApi';
import DeleteModal from './DeleteModal';
import { overlay } from 'overlay-kit';
import { useNavigate } from 'react-router-dom';
import { StudyDetailType } from '../../types/interface';

function LeaderMenuList({
  isMenuOpen,
  recruitId,
  data,
}: {
  isMenuOpen: boolean;
  recruitId: number;
  data: StudyDetailType;
}) {
  const navigate = useNavigate();

  // 스터디장이면 수정, 삭제 기능 추가
  const deleteStudy = useCallback(async () => {
    const response = await recruitApi.deleteRecruitInfo(recruitId);
    if (response.code === 200) {
      overlay.open(({ isOpen, close }) => {
        return <DeleteModal navigate={navigate} isOpen={isOpen} close={close} text={response.message} />;
      });
    }
  }, []);

  const editStudy = () => {
    navigate(`/edit-recruit/${recruitId}`, { replace: true, state: { ...data } });
  };

  return (
    <section
      className={`${isMenuOpen ? 'slide-down visible opacity-100 transition-all duration-300 ease-in-out' : 'invisible opacity-0'} study-menu study-menu-md`}
    >
      <button
        className="border-light-gray flex w-full cursor-pointer items-center justify-between gap-x-1.5 border-b px-4 py-2"
        onClick={deleteStudy}
      >
        글 삭제하기
      </button>
      <button
        className={`border-light-gray flex w-full cursor-pointer items-center justify-between border-b px-4 py-2`}
        onClick={editStudy}
      >
        글 수정하기
      </button>
    </section>
  );
}

export default React.memo(LeaderMenuList);
