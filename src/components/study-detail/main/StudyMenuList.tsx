import { overlay } from 'overlay-kit';
import LeaveStudyModal from './LeaveStudyModal';
import ManageNoticeModal from './ManageNoticeModal';
import { useNavigate } from 'react-router-dom';

export default function StudyMenuList({
  isMenuOpen,
  isLeader,
  studyId,
  hasNotice,
  toggleMenu,
}: {
  isMenuOpen: boolean;
  isLeader: boolean;
  studyId: number;
  hasNotice: boolean;
  toggleMenu: () => void;
}) {
  const navigate = useNavigate();
  const openLeaveModal = () => {
    toggleMenu();
    overlay.open(({ isOpen, close }) => {
      return <LeaveStudyModal isOpen={isOpen} close={close} />;
    });
  };
  const openManageModal = () => {
    toggleMenu();
    overlay.open(({ isOpen, close }) => {
      return <ManageNoticeModal isOpen={isOpen} close={close} studyId={studyId} hasNotice={hasNotice} />;
    });
  };

  return (
    <section
      className={`${isMenuOpen ? 'slide-down transition-transform duration-300 ease-in-out' : 'invisible'} study-menu study-menu-md`}
    >
      <button
        className="border-light-gray flex w-full cursor-pointer items-center justify-between gap-x-1.5 border-b px-4 py-2"
        onClick={() => navigate(`/study/statistics/${studyId}`)}
      >
        스터디 통계
      </button>
      <button
        className={`border-light-gray flex w-full cursor-pointer items-center justify-between border-b px-4 py-2 ${!isLeader && 'text-light-gray'}`}
        onClick={openManageModal}
        disabled={!isLeader}
      >
        공지 {hasNotice ? '수정 및 삭제' : '등록'}하기
        <span className="rounded-full bg-black px-1.5 py-1 text-xs text-white">스터디장</span>
      </button>
      <button
        disabled={!isLeader}
        className={`border-light-gray flex w-full cursor-pointer items-center justify-between border-b px-4 py-2 ${!isLeader && 'text-light-gray'}`}
        onClick={() => navigate(`/edit-study/${studyId}`)}
      >
        스터디 정보 수정
        <span className="rounded-full bg-black px-1.5 py-1 text-xs text-white">스터디장</span>
      </button>
      <button className="cursor-pointer py-2 pl-4" onClick={openLeaveModal}>
        스터디 나가기
      </button>
    </section>
  );
}
