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
      className={`${isMenuOpen ? 'slide-down visible opacity-100 transition-all duration-300 ease-in-out' : 'invisible opacity-0'} border-light-gray fixed top-0 left-0 z-40 mt-[52px] box-border w-full transform rounded-b-md border-x-2 border-b-2 bg-white drop-shadow-sm md:left-1/2 md:w-[766px] md:-translate-x-1/2 md:border-x-0`}
    >
      <ul>
        <li className="border-light-gray cursor-pointer border-b py-2 pl-4" onClick={openLeaveModal}>
          <button className="cursor-pointer">스터디 나가기</button>
        </li>
        <li
          className="border-light-gray flex cursor-pointer items-center justify-between border-b px-4 py-2"
          onClick={openManageModal}
        >
          <button disabled={!isLeader} className={`${!isLeader && 'text-light-gray'} cursor-pointer`}>
            공지 {hasNotice ? '수정 및 삭제' : '등록'}하기
          </button>
          <span className="rounded-full bg-black px-1.5 py-1 text-xs text-white">스터디장</span>
        </li>

        <li
          className="border-light-gray flex cursor-pointer items-center justify-between gap-x-1.5 border-b px-4 py-2"
          onClick={() => navigate(`/edit-study/${studyId}`)}
        >
          <button
            disabled={!isLeader}
            className={`${!isLeader && 'text-light-gray'}`}
            onClick={() => navigate(`/edit-study/${studyId}`)}
          >
            스터디 정보 수정
          </button>
          <span className="rounded-full bg-black px-1.5 py-1 text-xs text-white">스터디장</span>
        </li>
      </ul>
    </section>
  );
}
